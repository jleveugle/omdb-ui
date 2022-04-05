import { VideoCameraIcon, CodeIcon, CubeIcon, ArrowNarrowRightIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import SearchBar from "./SearchBar";
import Link from 'next/link'

function Header() {
  const router = useRouter();
  const { s, type, y } = router.query;

  return (
    <div>
      <header className="bg-gradient-to-r from-blue-700 to-blue-600 px-4 sm:px-6 lg:px-16">
        <div className="container mx-auto">
          <div className="py-6 border-b border-slate-200/20 flex">
            <h1 className="font-bold text-white text-2xl inline-block">
              <Link href="/" passHref={true}>
                <a>
                    <VideoCameraIcon className="h-8 w-8 inline-block align-middle mr-2" />
                    <span className="align-middle">OMDb UI</span>
                </a>
              </Link>
            </h1>
            <a className="my-auto ml-auto text-white font-medium hover:underline" href="mailto:joffrey.leveugle@gmail.com">
                Contact me 
                <ArrowNarrowRightIcon className="h-5 l-5 ml-2 inline-block" />
            </a>
          </div>
          <div className="py-5 md:py-14 md:flex">
            <div className="w-full md:w-1/2">
              <p className="container mx-auto font-bold text-white text-2xl mb-2">
                Are you looking for information on a film or a series?
              </p>
              <p className="container mx-auto font-bold text-blue-300 text-2xl">
                We have the information you need!
              </p>
            </div>
            <div className="text-center md:text-right my-auto w-full md:w-1/2">
              <a
                href=""
                className="inline-block bg-white rounded px-8 py-4 text-blue-600 font-medium mr-4 w-full my-5 md:w-auto md:my-0"
              >
                <CodeIcon className="h-5 l-5 inline-block mr-2" />
                Source Code
              </a>
              <a
                target="_blank"
                href=""
                className="inline-block px-8 py-4 rounded font-medium text-white bg-white bg-opacity-20 w-full md:w-auto"
              >
                <CubeIcon className="h-5 l-5 inline-block mr-2" />
                Discover the API
              </a>
            </div>
          </div>
        </div>
      </header>
      <SearchBar s={s} type={type} y={y} />
    </div>
  );
}

export default Header;
