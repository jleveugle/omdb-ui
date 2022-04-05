import { useRouter } from 'next/router'
import useSWR from "swr";
import Image from 'next/image'

import PeopleItem from '../../components/PeopleItem'

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Result = () => {
  const router = useRouter()
  const { i } = router.query

  const { data, error } = useSWR(`/api/omdb?i=${i}`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return <div className="container mx-auto py-20 flex flex-col md:flex-row px-5 md:px-0">
    <div className="md:mr-10 mx-auto">
      { data.Poster !== "N/A" && <Image src={data.Poster} alt="" width={291} height={420} /> }
    </div>
    <div className="w-full">
      <div className="block border-b pb-2 mt-5 md:mt-0">
        <h2 className="text-2xl">{data.Title}</h2>
        <span>{data.Released || data.Year} - <span className="capitalize">{data.Type}</span></span>
      </div>
      <div className="flex flex-col md:flex-row mt-5">
        <div className="w-full md:w-2/3">
          <h3 className="block border-b pb-2 font-bold mb-2">Plot</h3>
          <p>{data.Plot}</p>
          <h3 className="block border-b mt-4 font-bold pb-2 mb-2">More informations</h3>
          <p>{data.Language}</p>
          <p>DVD: {data.DVD}</p>
          <p>{data.Country} - {data.Genre}</p>
        </div>
        <div className="w-full md:w-1/3 md:ml-5 mt-5 md:mt-0">
          <h3 className="block border-b pb-2 font-bold">Staff</h3>
          <ul className="mt-5">
            <li className="mb-2">
              <PeopleItem name={data.Director} role="Director" />
            </li>
            { data.Actors.split(',').map((actor, index)=> <li key={index} className="mb-2">
              <PeopleItem name={actor} role="Actor" />
            </li>) }
          </ul>
        </div>
      </div>
    </div>
  </div>
}

export default Result