import url from 'url';

const apiKey = process.env.OMDB_API_KEY
const baseUrl = `https://www.omdbapi.com`

export default async function handler(req, res) {
    const queryObject = url.parse(req.url, true).query;
    const params = {
        apiKey,
        v: 1,
        r: "json"
    }

    const usp = new URLSearchParams();
    const mergedParams = Object.assign({}, queryObject, params);

    for(let key in mergedParams) {
        if(mergedParams[key]) {
            usp.append(key, mergedParams[key]);
        }
    }

    const response = await fetch(`${baseUrl}?${usp.toString()}`);
    const body = await response.text();

    res.json(body);
}