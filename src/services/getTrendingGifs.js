import { API_KEY } from "@env"

export default async function getTredingGifs({ limit }) { 
    const API_URL = 
    `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}`

    return fetch(API_URL, { method: "GET" })
        .then(res => res.json())
        .then(response => {
            const data = response.data
            const gifs = data.map(gif => { 
                const { url } = gif;
                return { url };
            });

            return gifs
        })
        .catch(err => console.error(err));
}