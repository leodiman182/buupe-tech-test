import {ReactNode, useMemo, useState} from "react";
import AppContext from ".";

const AppProvider = ({ children }: ProviderProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const dependencies = [searchQuery, setSearchQuery];

  const context = useMemo(
    () => ({
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