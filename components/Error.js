import { EmojiSadIcon } from '@heroicons/react/outline'

function reload() {
    location.reload();
}

function Loading() {
    return <div className="text-center py-20 font-medium">
        <EmojiSadIcon className="h-20 w-20 mb-4 mx-auto" />
        <p className="mb-5">Oops! An error occured!</p>
        <button onClick={reload} className="py-2 px-4 rounded bg-blue-500 hover:bg-blue-600 font-medium text-white">
            Reload this page
        </button>
    </div>
}

export default Loading