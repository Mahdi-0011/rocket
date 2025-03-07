import { useState, useEffect } from "react";
import { SWPeople } from "../components/SWPeopleCard/SWPeopleCard";

const useFetch = (url: string) => {
  const [data, setData] = useState<SWPeople | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        if (!response.ok) {
          throw new Error(`An error occurred: ${response.statusText}`);
        }
        setData(jsonData);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
