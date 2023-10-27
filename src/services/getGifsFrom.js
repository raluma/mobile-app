import { API_KEY } from "@env"

export default async function getGifsFrom({ query, limit }) { 
    const API_URL = 
    `https://api.giphy.com/v1/channels/search?api_key=${API_KEY}&q=${query}&limit=${limit}`

    return fetch(API_URL, { method: "GET" })
        .then(res => res.json())
        .then(response => {
            const data = response.data
            const gifs = data.map(gif => { 
                const { id, featured_gif } = gif;
                return { id, url: featured_gif.images.original.url };
            });

            return gifs
        })
        .catch(err => console.error(err));
}