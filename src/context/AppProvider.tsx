import {ReactNode, useMemo, useState} from "react";
import AppContext from ".";
import TProduct from "../types/TProduct.ts";

const AppProvider = ({ children }: ProviderProps) => {
  const [data, setData] = useState<TProduct[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const dependencies = [
    data,
    setData,
    searchQuery,
    setSearchQuery
  ];

  const context = useMemo(
    () => ({
      data,
      setData,
      searchQuery,
      setSearchQuery
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencies,
  );

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

export default AppProvider;

export interface ProviderProps {
  children: ReactNode;
}