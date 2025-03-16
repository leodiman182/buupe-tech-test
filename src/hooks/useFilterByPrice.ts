import {useCallback} from "react";
import useResetSearch from "./useResetSearch.ts";
import useAppContext from "../context/useAppContext.ts";
import TProduct from "../types/TProduct.ts";
import products from "../mock/products.ts";

const useFilterByPrice = () => {
  const { data, priceFilter, setData } = useAppContext();
  const resetSearch = useResetSearch();

  return useCallback(() => {
    if (!priceFilter) {
      return resetSearch();
    }

    let filtered: TProduct[];

    switch (priceFilter) {
      case "below":
        filtered = products.filter((product) => product.productPrice < 50);
        break;
      case "between":
        filtered = products.filter(
          (product) =>
            product.productPrice >= 50 && product.productPrice <= 100
        );
        break;
      case "above":
        filtered = products.filter((product) => product.productPrice > 100);
        break;
      default:
        filtered = data;
        break;
    }

    setData(filtered);
  }, [priceFilter, data, setData, resetSearch]);
};

export default useFilterByPrice;