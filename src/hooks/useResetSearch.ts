import useAppContext from "../context/useAppContext.ts";
import products from "../mock/products.ts";

const useResetSearch = () => {
  const { setData, setPriceFilter } = useAppContext();

  return () => {
    setPriceFilter(undefined);
    setData(products);
  };
};

export default useResetSearch;