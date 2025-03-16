import useAppContext from "../context/useAppContext.ts";
import products from "../mock/mock.ts";

const useResetSearch = () => {
  const { setData } = useAppContext();

  return () => setData(products);
};

export default useResetSearch;