import {imageUrl} from "../../assets/logo.ts";
import useAppContext from "../../context/useAppContext.ts";
import {ChangeEvent, FormEvent, FormEventHandler, useEffect, useState} from "react";
import Button from "../Button";
import {IoMdCloseCircleOutline} from "react-icons/io";
import useFilterProducts from "../../hooks/useFilterProducts.ts";
import useResetSearch from "../../hooks/useResetSearch.ts";
import {closeIcon, headerComponent, logoLink, searchButtonComponent, searchComponent} from "../../utils/testid-list.ts";

export default function Header() {
  const { searchQuery, setSearchQuery } = useAppContext();
  const resetSearch = useResetSearch();
  const filterProducts = useFilterProducts();
  const [query, setQuery] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

  const handleSearch: FormEventHandler<HTMLFormElement> = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(query);
  };

  const handleXClick = () => setQuery('');

  useEffect(() => {
    if (query === '') {
      resetSearch();
      setSearchQuery('');
    }
  }, [query])

  useEffect(() => {
    filterProducts();
  }, [searchQuery])

  return (
    <header data-testid={ headerComponent } className='w-full bg-white p-4'>
      <section
        className='max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 w-full'>
        <div className=''>
          <a data-testid={ logoLink } href='https://www.buupe.com/register' target='_blank' rel='noopener noreferrer'>
            <img src={imageUrl} alt='Logo' />
          </a>
        </div>
        <form onSubmit={ handleSearch } className='w-full lg:max-w-md flex flex-row items-center gap-2' action="">
          <div className='w-full relative'>
            <input
              data-testid={ searchComponent }
              value={ query }
              onChange={ handleChange }
              type="text"
              placeholder='Buscar produtos...'
              className='border rounded-md pl-3 p-1 border-gray-400 w-full focus-visible:outline-none'
            />
            { query !== '' && (
              <IoMdCloseCircleOutline
                data-testid={ closeIcon }
                onClick={ handleXClick }
                className='absolute right-1 top-1 text-stone-500 hover:text-red-700 cursor-pointer z-10'
                size={ 25 }
              />)
            }
          </div>
          <Button data-testid={ searchButtonComponent }>Buscar</Button>
        </form>
      </section>
    </header>
  )
}