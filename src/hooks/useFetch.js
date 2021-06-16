import { useEffect, useState } from 'react'

const useFetch = (url, method = 'GET',  options = {}) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const baseUrl = 'https://api.themoviedb.org/3/movie'
  const apiKey = '77c57d7fc2e5ee5e5664c1a03edf9f29'

  useEffect(() => {
    const endpoint = `${baseUrl}${url}?api_key=${apiKey}`
    console.log(endpoint)

    const fetchData = async () => {
      try {
        const res = await fetch(endpoint, {
          method,
          ...options,
        });
        const json = await res.json();

        setResponse(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, []);

  return { response, error, loading };
};

export default useFetch
