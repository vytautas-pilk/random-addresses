import { useEffect, useCallback, useState } from "react";

export default function useFetch({ url, method, body }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ message: "", state: false });
  const [refetchIndex, setRefetchIndex] = useState(0);

  function refetch () {
    setRefetchIndex(last => last + 1);
  }

  const callApi = useCallback(async () => {
    setIsLoading(true);

    let params = {
      method,
    };

    if (method === "POST") {
      params = Object.assign({}, params, { body: JSON.stringify(body) })
    }

    try {
      const response = await fetch(url, params);
      const result = await response.json();

      if (response.ok) {
        setData(result);
      } else {
        setError({ state: true });
      }
    } catch (error) {
      // console.log(error);
      setError({ message: error.message, state: true });
    } finally {
      setIsLoading(false);
    }
  }, [url, method, body]);

  useEffect(() => {
    if (url) {
      callApi();
    }

  }, [callApi, url, refetchIndex]);

  return [{ data, isLoading, error }, refetch ];
}
