import { ArrowNarrowRightIcon, SearchIcon } from '@heroicons/react/solid'

const TypeOptions = ['movie', 'series', 'episode', 'game']

function SearchBar({s, type, y }) {
    return <div className="block flex bg-white">
        <form method="GET" action="/results" className="md:border-b w-full">
            <div className="container flex mx-auto flex-col md:flex-row">
                <label className="block flex w-full md:w-1/2 border-b md:border-b-0 md:border-r px-4 py-2 md:p-0">
                    <SearchIcon className="h-8 w-8 inline-block my-auto text-gray-300" />
                    <span className="sr-only">Title</span>
                    <input autoFocus className="w-full py-2 px-4" type="text" name="s" defaultValue={s} required placeholder="Search a film, a serie or a game title" />
                </label>
                <label className="block border-r px-2 flex border-b md:border-b-0">
                    <span className="sr-only">Type</span>
                    <select className="block bg-white py-4 md:py-2 px-4 align-middle capitalize w-full md:w-auto" name="type" defaultValue={type}>
                        <option></option>
                        { TypeOptions.map((type) => <option key={type} className="capitalize">{type}</option> )}
                    </select>
                </label>
                <label className="my-auto flex border-b md:border-b-0">
                    <span className="sr-only">Year</span>
                    <input className="py-4 md:py-2 px-4 w-full block" type="text" name="y" defaultValue={y} placeholder="Year" />
                </label>
                <div className="md:ml-auto md:border-l px-5 md:px-0">
                    <button type="submit" className="flex mx-auto text-white bg-blue-500 md:bg-white justify-center w-full md:w-auto px-5 rounded py-4 mt-5 md:mt-0 md:pl-8 md:py-3 font-medium md:text-gray-400">
                        <span className="my-auto">Find</span>
                        <ArrowNarrowRightIcon className="h-6 w-6 ml-2 inline-block my-auto" />
                    </button>
                </div>
            </div>
        </form>
    </div>
}

export default SearchBar;