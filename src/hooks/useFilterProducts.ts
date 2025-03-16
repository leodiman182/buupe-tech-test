import useAppContext from "../context/useAppContext.ts";
import {useCallback} from "react";
import useResetSearch from "./useResetSearch.ts";

const useFilterProducts = () => {
  const { searchQuery ,setData, data } = useAppContext();
  const resetSearch = useResetSearch();

  return useCallback(() => {
    if (searchQuery === '') {
      return resetSearch();
    }

    const query = searchQuery.toLowerCase();

    const filtered = data.filter((product) => {
      const nameMatch = product.productName.toLowerCase().includes(query);
      const descriptionMatch = product.productDescription.toLowerCase().includes(query);
      return nameMatch || descriptionMatch;
    });

    setData(filtered);
  }, [searchQuery, data, setData, resetSearch]);
};

export default useFilterProducts;