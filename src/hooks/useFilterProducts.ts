import {useCallback} from "react";
import TProduct from "../types/TProduct.ts";
import products from "../mock/products.ts";
import useAppContext from "../context/useAppContext.ts";

const useFilterProducts = () => {
  const { searchQuery, data, priceFilter, setData, setIsFilterDrawerOpen } = useAppContext();

  return useCallback(() => {
    let filtered: TProduct[];

    if (searchQuery !== '') {
      const query = searchQuery.toLowerCase();
      filtered = (products).filter((product) => {
        const nameMatch = product.productName.toLowerCase().includes(query);
        const descriptionMatch = product.productDescription.toLowerCase().includes(query);
        return nameMatch || descriptionMatch;
      });
    } else {
      filtered = products;
    }

    if (priceFilter) {
      switch (priceFilter) {
        case "below":
          filtered = filtered.filter((product) => product.productPrice < 50);
          break;
        case "between":
          filtered = filtered.filter(
            (product) => product.productPrice >= 50 && product.productPrice <= 100
          );
          break;
        case "above":
          filtered = filtered.filter((product) => product.productPrice > 100);
          break;
        default:
          break;
      }
    }

    setIsFilterDrawerOpen(false);
    setData(filtered);
  }, [searchQuery, data, priceFilter, setData, setIsFilterDrawerOpen]);
};

export default useFilterProducts;