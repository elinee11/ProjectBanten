import { useState, useEffect } from "react";

/**
 * Custom Hook yang digunakan untuk mendapatkan data dari API
 * @param {string} path Path
 * @returns object
 */
function useFetcherData(path) {
  const [data, setData] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [dataError, setDataError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.bantentourism.cloud/wp-json/wp/v2/${path}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setDataLoading(false);
      } catch (error) {
        setDataError(error);
        setDataLoading(false);
      }
    };

    fetchData();

    return () => {};
  }, []);

  return { data, dataLoading, dataError };
}

export default useFetcherData;
