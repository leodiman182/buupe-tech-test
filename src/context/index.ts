import {createContext, Dispatch, SetStateAction} from "react";
import {defaultAppContextValue} from "./defaultAppContextValue.ts";
import TProduct from "../types/TProduct.ts";

const AppContext = createContext<IAppContext>(
  defaultAppContextValue({}),
);

export default AppContext;

interface IAppContext {
  data: TProduct[],
  setData: Dispatch<SetStateAction<TProduct[]>>,
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}