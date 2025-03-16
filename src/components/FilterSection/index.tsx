import Filter from "./Filter";
import useAppContext from "../../context/useAppContext.ts";
import {useEffect} from "react";
import useFilterByPrice from "../../hooks/useFilterByPrice.ts";

type TFilterList = { description: string, keyword: string }[];

const filterList: TFilterList = [
  {
    description: 'Abaixo de R$ 50,00',
    keyword: 'below',
  },
  {
    description: 'Entre R$ 50,00 e R$ 100,00',
    keyword: 'between',
  },
  {
    description: 'Acima de R$ 100,00',
    keyword: 'above',
  },
];

export default function FilterSection() {
  const { priceFilter, setPriceFilter} = useAppContext();
  const filterByPrice = useFilterByPrice();

  function clearFilter() {
    setPriceFilter(undefined)
  }

  useEffect(() => {
    filterByPrice();
  }, [priceFilter]);

  return (
    <>
      <aside className='w-1/6 hidden lg:block'>
        <div className='border-r border-gray-400 py-8 h-full'>
          <h2 className='text-2xl font-medium mb-8'>
            Filtros
          </h2>
          <div>
            <h3 className='text-lg mb-2 font-medium'>Preço</h3>
            { filterList.map((filter) => (
              <Filter filter={filter} />
            )) }
            {priceFilter && <div
              className='mt-2 text-gray-500 hover:text-red-600 cursor-pointer'
              onClick={ clearFilter }
            >
              Limpar
            </div>}
          </div>
        </div>
      </aside>
    </>
  )
}