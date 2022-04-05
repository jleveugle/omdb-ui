import { HeartIcon } from '@heroicons/react/solid'

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 md:py-14 px-4 sm:px-6 lg:px-16 text-sm leading-5 flex">
      Developed using NextJS with{" "}
      <HeartIcon className="h-4 l-4 inline-block mx-1 text-red-500 my-auto" /> -
      2022
    </footer>
  );
}

export default Footer;
