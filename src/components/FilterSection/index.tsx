import Filter from "./Filter";
import useAppContext from "../../context/useAppContext.ts";
import { useEffect } from "react";
import useFilterByPrice from "../../hooks/useFilterByPrice.ts";
import { isPlural } from "../../utils/isPlural.ts";
import {
  clearFilterButton,
  filterSectionComponent,
  priceFilterList,
  productCount,
  searchQueryTitle
} from "../../utils/testid-list.ts";
import {filterList} from "./filterList.ts";

export default function FilterSection() {
  const { searchQuery, data, priceFilter, setPriceFilter } = useAppContext();
  const filterByPrice = useFilterByPrice();

  function clearFilter() {
    setPriceFilter(undefined);
  }

  useEffect(() => {
    filterByPrice();
  }, [priceFilter]);

  const plural = isPlural(data.length);

  return (
    <>
      <aside className='w-1/6 hidden lg:block'>
        <div className='border-r border-gray-400 py-8 h-full' data-testid={ filterSectionComponent }>
          {searchQuery !== '' && (
            <>
              <h2 className='text-2xl font-medium' data-testid={ searchQueryTitle }>
                {searchQuery.toUpperCase()}
              </h2>
              <p data-testid={ productCount }>
                {data.length} produto{plural} encontrado{plural}
              </p>
            </>
          )}

          <div className='mt-8'>
            <h3 className='text-lg mb-2 font-medium'>Preço</h3>
            <div data-testid={ priceFilterList }>
              {filterList.map((filter) => (
                <div key={filter.keyword} data-testid={`price-filter-${filter.keyword}`}>
                  <Filter filter={filter} />
                </div>
              ))}
            </div>
            {priceFilter && (
              <div
                className='mt-2 text-gray-500 hover:text-red-600 cursor-pointer'
                onClick={clearFilter}
                data-testid={ clearFilterButton }
              >
                Limpar
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}