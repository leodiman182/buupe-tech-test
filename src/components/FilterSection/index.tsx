import Filter from "./Filter";
import useAppContext from "../../context/useAppContext.ts";
import {useEffect} from "react";
import useFilterByPrice from "../../hooks/useFilterByPrice.ts";
import {isPlural} from "../../utils/isPlural.ts";
import {
  filterSectionComponent, mobileFilterSectionComponent,
  priceFilterList,
  productCount,
  searchQueryTitle
} from "../../utils/testid-list.ts";
import {filterList} from "./filterList.ts";
import {Drawer, useMediaQuery} from "@mui/material";
import {theme} from "../../styles/ThemeProvider.ts";
import ClearFilterButton from "../ClearFilterButton";

export default function FilterSection() {
  const {
    searchQuery,
    data,
    priceFilter,
    isFilterDrawerOpen,
    setIsFilterDrawerOpen
  } = useAppContext();

  const filterByPrice = useFilterByPrice();

  const isScreenLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const plural = isPlural(data.length);

  const toggleDrawer = (newOpen: boolean) => () => {
    setIsFilterDrawerOpen(newOpen);
  };

  useEffect(() => {
    filterByPrice();
  }, [priceFilter]);

  return !isScreenLarge ? (
    <Drawer sx={{ maxWidth: '95%' }} open={ isFilterDrawerOpen } onClose={ toggleDrawer(false) }>
      <div className='p-10 h-full max-w-72' data-testid={ mobileFilterSectionComponent }>
        <h2 className='text-2xl text-primary'>
          Filtros
        </h2>
        { searchQuery !== '' && (
          <>
            <p className='text-2xl font-medium truncate' data-testid={ searchQueryTitle }>
              { searchQuery.toUpperCase() }
            </p>
            <p data-testid={ productCount }>
              { data.length } produto{ plural } encontrado{ plural }
            </p>
          </>
        ) }
        <div className='mt-8'>
          <h3 className='text-lg mb-2 font-medium'>Preço</h3>
          <div data-testid={ priceFilterList }>
            { filterList.map((filter) => (
              <div key={ filter.keyword } data-testid={ `price-filter-${ filter.keyword }` }>
                <Filter filter={ filter }/>
              </div>
            )) }
          </div>
          <ClearFilterButton sx={{ marginTop: 2 }} color='inherit' />
        </div>
      </div>
    </Drawer>
  ) : (
    <aside className='w-1/6 hidden lg:block'>
      <div className='border-r border-gray-400 py-8 h-full' data-testid={ filterSectionComponent }>
        { searchQuery !== '' && (
          <>
            <h2 className='text-2xl font-medium truncate' data-testid={ searchQueryTitle }>
              { searchQuery.toUpperCase() }
            </h2>
            <p data-testid={ productCount }>
              { data.length } produto{ plural } encontrado{ plural }
            </p>
          </>
        ) }
        <div className='mt-8'>
          <h3 className='text-lg mb-2 font-medium'>Preço</h3>
          <div data-testid={ priceFilterList }>
            { filterList.map((filter) => (
              <div key={ filter.keyword } data-testid={ `price-filter-${ filter.keyword }` }>
                <Filter filter={ filter }/>
              </div>
            )) }
          </div>
          <ClearFilterButton sx={{ marginTop: 2 }} color='inherit' />
        </div>
      </div>
    </aside>
  )
}