import { useEffect, useState } from 'react'
import getTredingGifs from '../services/getTrendingGifs'

export function useTrendingGifs({ limit }) {
    const [gifs, setGifs] = useState(
        {loading: true, results: []}
    );

    useEffect(() => {   
        getTredingGifs({ limit })
            .then(gifs => {
                setTimeout(() => {
                    setGifs({ loading: false, results: gifs })
                }, 1000);
            }) 
    }, []);

    return gifs;
}