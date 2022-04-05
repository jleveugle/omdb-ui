import { useRef, useState, useEffect } from 'react';
import { useRouter } from "next/router";
import useInView from 'react-cool-inview';

const useInfiniteLoading = (props) => {
    const { getItems } = props;
    const [items, setItems] = useState([]);
    const router = useRouter();
    const { page } = router.query;
    const pageToLoad = useRef(page || 1);
    const initialPageLoaded = useRef(false);
    const isLoading = useRef(false);
    const [hasMore, setHasMore] = useState(true);

    const loadItems = async () => {
      if(isLoading.current === true) return;

      isLoading.current = true;

      const response = await getItems({
        page: pageToLoad.current
      });

      const {totalResults, Search } = await response.json();

      setHasMore((Math.floor(totalResults / 10)) > pageToLoad.current);
        setItems(prevItems => [...prevItems, ...Search]);
        pageToLoad.current++;
      isLoading.current = false;
    };
  
    useEffect(() => {
      if (Object.keys(router.query).length > 0) {
        if (initialPageLoaded.current) {
            return;
        }
    
        loadItems();
        initialPageLoaded.current = true;
      }
    
    }, [router.query, loadItems])

    const { observe } = useInView({
        onEnter: () => {
            router.isReady && loadItems();
        },
    });
  
    return {
      items,
      hasMore,
      loadItems,
      observe
    };
  }

  export default useInfiniteLoading;