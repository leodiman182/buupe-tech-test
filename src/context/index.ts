import {createContext, Dispatch, SetStateAction} from "react";
import {defaultAppContextValue} from "./defaultAppContextValue.ts";
import TProduct from "../types/TProduct.ts";
import {TPriceFilter} from "../types/TPriceFilter.ts";

const AppContext = createContext<IAppContext>(
  defaultAppContextValue({}),
);

export default AppContext;

interface IAppContext {
  data: TProduct[],
  setData: Dispatch<SetStateAction<TProduct[]>>,
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  priceFilter: undefined | TPriceFilter,
  setPriceFilter: Dispatch<SetStateAction<TPriceFilter | undefined>>
}