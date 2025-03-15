import {createContext, Dispatch, SetStateAction} from "react";
import {defaultAppContextValue} from "./defaultAppContextValue.ts";

const AppContext = createContext<IAppContext>(
  defaultAppContextValue({}),
);

export default AppContext;

interface IAppContext {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}