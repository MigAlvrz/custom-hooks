import { useEffect, useState } from "react"

// https://www.breakingbadapi.com/api/quotes/1
export const useFetch = (url = 'https://www.breakingbadapi.com/api/quote/random') => {

    const [state, setState] = useState({
        data: null,
        loading: true,
        hasError: null,
    })

    const getFetch = async() => {

        setState({
            ...state,
            isLoading: true,
        })

        const resp  = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null,
        })

        console.log(data);
    }

    useEffect(() => {
        getFetch()
    }, [url])
    

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    
  };
}
