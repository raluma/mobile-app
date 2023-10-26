import { useEffect, useState } from 'react'
import { isLogin } from '../services/accountFunctions'

export function useIsLogin() {
    const [response, setResponse] = useState(
        {loading: true, result: false}
    );

    useEffect(() => {   
        isLogin()
            .then(response => {
                setTimeout(() => {
                    setResponse({ loading: false, result: response })
                }, 1000);
            }) 
    }, []);

    return [response, setResponse];
}