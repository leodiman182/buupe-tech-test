import useAppContext from "../context/useAppContext.ts";
import products from "../mock/products.ts";

const useResetSearch = () => {
  const { setData } = useAppContext();

  return () => setData(products);
};

export default useResetSearch;