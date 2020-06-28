import { useState, useEffect } from "react";

export const useFetch = (url, ref, initialValue) => {
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //ref has current property where it has his value
    if (ref.current) {
      (async () => {
        try {
          const res = await fetch(url);
          const resJson = await res.json();
          setData(resJson);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      })();
    }
    return () => {
      //when component unmounting I make ref value as false
      ref.current = false;
    };
  }, [url, ref]);
  //destructing the data / the values we are returning
  return { loading, data, error };
};