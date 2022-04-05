import { useRouter } from "next/router";
import { ArrowDownIcon, EmojiSadIcon} from "@heroicons/react/outline";

import CardResult from "../../components/CardResult";
import InfiniteScrolling from '../../components/InfiniteScrolling'

function Results() {

  const router = useRouter();

  const { items, hasMore, loadItems, observe } = InfiniteScrolling({
    getItems: ({ page }) => {
        const { s, type, y } = router.query;

        const params = {
          s,
          type,
          y,
        };

        const usp = new URLSearchParams();

        for (let key in params) {
          if (params[key]) {
            usp.append(key, params[key]);
          }
        }

        return fetch(`/api/omdb?${usp.toString()}&page=${page}`)
    }
  });

  if (items.length <= 0)
    return (
      <div className="p-20 m-20 text-center text-3xl text-gray-600">
        <EmojiSadIcon className="h-20 w-20 mb-4 mx-auto" />
        Despite our best efforts, <br />
        we did not find any result corresponding to your search
      </div>
    );

  return (
    <div className="mx-auto">
      <div className="container mx-auto p-5 md:px-0">
        {/* <span>
          {totalResults} résultats pour la recherche &quot;{s}&quot;
        </span> */}

        <div className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-5 py-5">
          {items.map((result) => (
            <CardResult key={result.imdbID} result={result} />
          ))}
        </div>
        {hasMore && 
            <button ref={observe} onClick={() =>loadItems()} className="p-2 bg-blue-600 w-full md:w-auto rounded font-medium text-white">
                <ArrowDownIcon className="h-5 l-5 mr-2 inline-block" />
                <span>Load more elements</span>
            </button>
        }
      </div>
    </div>
  );
}

export default Results;
