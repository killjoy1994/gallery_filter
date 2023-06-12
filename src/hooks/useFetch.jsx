import React, { useEffect, useState } from 'react'

export default function useFetch(url, headers ) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, headers)
                if(!response.ok) {
                throw new Error("Request failed")
                }
                const jsonData = await response.json()
                setData(jsonData)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchData()
    }, [url])

  return {data, loading, error}
}
