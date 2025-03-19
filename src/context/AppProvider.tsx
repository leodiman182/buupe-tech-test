import {ReactNode, useMemo, useState} from "react";
import AppContext from ".";
import TProduct from "../types/TProduct.ts";
import {TPriceFilter} from "../types/TPriceFilter.ts";

const AppProvider = ({ children }: ProviderProps) => {
  const [data, setData] = useState<TProduct[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [priceFilter, setPriceFilter] = useState <TPriceFilter | undefined>();
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState<boolean>(false);

  const dependencies = [
    data,
    setData,
    searchQuery,
    setSearchQuery,
    priceFilter,
    setPriceFilter,
    isFilterDrawerOpen,
    setIsFilterDrawerOpen
  ];

  const context = useMemo(
    () => ({
      data,
      setData,
      searchQuery,
      setSearchQuery,
      priceFilter,
      setPriceFilter,
      isFilterDrawerOpen,
      setIsFilterDrawerOpen
    }),
    dependencies,
  );

  return <AppContext.Provider value={ context }>{ children }</AppContext.Provider>;
}

export default AppProvider;

export interface ProviderProps {
  children: ReactNode;
}