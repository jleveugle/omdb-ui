import Image from 'next/image'

const size = {
    height: 420,
    width: 291
}

function CardResult({ result }) {
    return <a key={result.imdbID} href={`/results/${result.imdbID}`} className="relative">
        { result.Poster === "N/A" && <div style={{minHeight: `${size.height}px`}} className="w-full h-full bg-gray-200 text-gray-600 text-center font-medium flex"><span className="m-auto">Aperçu indisponible</span></div> }
        { result.Poster !== "N/A" && <Image src={result.Poster} alt="" width={size.width} height={size.height} /> }
        <div className="absolute bottom-0 bg-black text-white font-medium bg-opacity-80 p-4 w-full">
            <span className="truncate w-full inline-block">{result.Title}</span>
            <p className="text-xs">{result.Year} - {result.Type}</p>
        </div>
    </a>
}

export default CardResult