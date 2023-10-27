import { useEffect, useState } from 'react'
import getGifsFrom from '../services/getGifsFrom'

export function useGifsFrom({ query, limit }) {
    const [gifs, setGifs] = useState(
        {loading: true, results: []}
    );

    useEffect(() => {   
        getGifsFrom({ query, limit })
            .then(gifs => {
                setTimeout(() => {
                    setGifs({ loading: false, results: gifs })
                }, 1000);
            }) 
    }, []);

    return gifs;
}