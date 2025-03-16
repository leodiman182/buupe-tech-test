import {ReactNode, useMemo, useState} from "react";
import AppContext from ".";
import TProduct from "../types/TProduct.ts";
import {TPriceFilter} from "../types/TPriceFilter.ts";

const AppProvider = ({ children }: ProviderProps) => {
  const [data, setData] = useState<TProduct[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [priceFilter, setPriceFilter] = useState <TPriceFilter | undefined>();

  const dependencies = [
    data,
    setData,
    searchQuery,
    setSearchQuery,
    priceFilter,
    setPriceFilter
  ];

  const context = useMemo(
    () => ({
      data,
      setData,
      searchQuery,
      setSearchQuery,
      priceFilter,
      setPriceFilter
    }),
    dependencies,
  );

  return <AppContext.Provider value={ context }>{ children }</AppContext.Provider>;
}

export default AppProvider;

export interface ProviderProps {
  children: ReactNode;
}