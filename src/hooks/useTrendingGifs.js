import { useEffect, useState } from 'react'
import getTredingGifs from '../services/getTrendingGifs'

export function useTrendingGifs({ limit }) {
    const [gifs, setGifs] = useState(
        {loading: true, results: []}
    );

    useEffect(() => {   
        getTredingGifs({ limit })
            .then(gifs => {
                setGifs({ loading: false, results: gifs })
            }) 
    }, [limit]);

    return gifs;
}