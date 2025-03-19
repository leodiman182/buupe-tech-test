import useAppContext from "../context/useAppContext.ts";
import {useCallback} from "react";
import useResetSearch from "./useResetSearch.ts";
import products from "../mock/products.ts";

const useFilterProducts = () => {
  const { searchQuery ,setData, data, priceFilter } = useAppContext();
  const resetSearch = useResetSearch();

  return useCallback(() => {
    if (searchQuery === '') {
      return resetSearch();
    }

    const query = searchQuery.toLowerCase();

    const list = priceFilter !== undefined ? data : products;

    const filtered = list.filter((product) => {
      const nameMatch = product.productName.toLowerCase().includes(query);
      const descriptionMatch = product.productDescription.toLowerCase().includes(query);
      return nameMatch || descriptionMatch;
    });

    setData(filtered);
  }, [searchQuery, data, setData, resetSearch]);
};

export default useFilterProducts;