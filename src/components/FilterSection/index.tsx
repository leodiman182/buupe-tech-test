import Filter from "./Filter";
import useAppContext from "../../context/useAppContext.ts";
import {isPlural} from "../../utils/isPlural.ts";
import {
  filterSectionComponent,
  mobileFilterSectionComponent,
  priceFilterList,
  productCount,
  searchQueryTitle,
} from "../../utils/testid-list.ts";
import {filterList} from "./filterList.ts";
import {Drawer, useMediaQuery} from "@mui/material";
import {theme} from "../../styles/ThemeProvider.ts";
import ClearFilterButton from "../ClearFilterButton";
import {ISearchQueryProps} from "../../types/ISearchQuery.ts";



const SearchQueryInfo = ({ searchQuery, data }: ISearchQueryProps) => {
  const plural = isPlural(data.length);

  return (
    <>
      <h2 className="text-2xl font-medium truncate" data-testid={ searchQueryTitle }>
        { searchQuery.toUpperCase() }
      </h2>
      <p data-testid={ productCount }>
        { data.length } produto{ plural } encontrado{ plural }
      </p>
    </>
  );
}

const PriceFilterList = () => (
  <div data-testid={ priceFilterList }>
    { filterList.map((filter) => (
      <div key={ filter.keyword } data-testid={ `price-filter-${ filter.keyword }` }>
        <Filter filter={ filter }/>
      </div>
    )) }
  </div>
);

const FilterContent = ({ searchQuery, data }: ISearchQueryProps) => (
  <>
    { searchQuery !== "" && <SearchQueryInfo searchQuery={ searchQuery } data={ data }/> }
    <div className="mt-8">
      <h3 className="text-lg mb-2 font-medium">Preço</h3>
      <PriceFilterList/>
      <ClearFilterButton sx={ { marginTop: 2 } } color="inherit"/>
    </div>
  </>
);


export default function FilterSection() {
  const { searchQuery, data, isFilterDrawerOpen, setIsFilterDrawerOpen } = useAppContext();
  const isScreenLarge = useMediaQuery(theme.breakpoints.up("lg"));

  const toggleDrawer = (newOpen: boolean) => () => {
    setIsFilterDrawerOpen(newOpen);
  };

  if (!isScreenLarge) {
    return (
      <Drawer sx={ { maxWidth: "95%" } } open={ isFilterDrawerOpen } onClose={ toggleDrawer(false) }>
        <div className="p-10 h-full max-w-72" data-testid={ mobileFilterSectionComponent }>
          <h2 className="text-2xl text-primary">Filtros</h2>
          <FilterContent searchQuery={ searchQuery } data={ data }/>
        </div>
      </Drawer>
    );
  }

  return (
    <aside className="w-1/6 hidden lg:block">
      <div className="border-r border-gray-400 py-8 h-full" data-testid={ filterSectionComponent }>
        <FilterContent searchQuery={ searchQuery } data={ data }/>
      </div>
    </aside>
  );
}