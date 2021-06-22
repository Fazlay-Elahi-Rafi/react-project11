import { useState, useEffect } from "react";
import paginate from "./paginate";
import Api from "./api";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(Api);

  const getProducts = async () => {
    setData(paginate(data));
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return { loading, data };
};
