import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [fetchedData, setFetchedData] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        
            fetch(url)
                .then (response => {
                    if (!response.ok) {
                        throw Error("Could not fetch data due to wrong address");
                    }
                return response.json();
                })
                .then (fetchedData => {
                setFetchedData(fetchedData);
                setIsLoading(false);
                })
                .catch (err => {
                    setError(err.message);
                    
                    setIsLoading(false);
                });
    }, [url])

    

    return {fetchedData, isLoading, error};
    
}
