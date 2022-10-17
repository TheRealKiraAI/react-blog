import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

   // useEffect re-renders code whenever name state changes
   useEffect(() => {
    fetch(url)
    .then(res => {
      if (!res.ok) {
        throw Error('cannot fetch');
      }
      return res.json()
    })
    .then(data => {
      console.log(data)
      setData(data)
      setIsPending(false);
      setError(null);
    })
    .catch(err => {
      setIsPending(false);
      setError(err.message);
    })
  }, []);

  return { data, isPending, error }
}

export default useFetch;