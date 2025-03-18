import {MouseEvent} from "react";
import {TPriceFilter} from "../../../types/TPriceFilter.ts";
import useAppContext from "../../../context/useAppContext.ts";

interface FilterProps {
  filter: { description: string, keyword: string }
}

export default function Filter({ filter }: FilterProps) {
  const { priceFilter, setPriceFilter } = useAppContext();

  function handleFilter(event: MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLDivElement;
    const value = target.id as TPriceFilter | undefined;

    setPriceFilter(value);
  }

  const className = `${
    priceFilter === filter.keyword 
    ? 'text-primary font-semibold'
    : 'text-gray-700 hover:text-primary'} hover:underline cursor-pointer`

  return (
    <div
      className={ className }
      key={ filter.keyword }
      id={ filter.keyword }
      onClick={ handleFilter }
    >
      { filter.description }
    </div>
  )
}