import {imageUrl} from "../../assets/logo.ts";
import useAppContext from "../../context/useAppContext.ts";
import {ChangeEvent, FormEvent, FormEventHandler, useEffect, useState} from "react";
import Button from "../Button";
import {IoMdCloseCircleOutline} from "react-icons/io";
import useFilterProducts from "../../hooks/useFilterProducts.ts";
import useResetSearch from "../../hooks/useResetSearch.ts";
import {closeIcon, headerComponent, logoLink, searchButtonComponent, searchComponent} from "../../utils/testid-list.ts";
import {MdFilterAlt} from "react-icons/md";
import ClearFilterButton from "../ClearFilterButton";

export default function Header() {
  const { searchQuery, setSearchQuery, isFilterDrawerOpen, setIsFilterDrawerOpen } = useAppContext();
  const resetSearch = useResetSearch();
  const filterProducts = useFilterProducts();
  const [query, setQuery] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

  const handleSearch: FormEventHandler<HTMLFormElement> = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(query);
  };

  const handleXClick = () => setQuery('');

  const handleToggleDrawer = () => setIsFilterDrawerOpen(!isFilterDrawerOpen);

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
    <header
      data-testid={headerComponent}
      className="w-full bg-white  fixed top-0 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-secondary after:to-primary"
    >
      <section
        className='max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 w-full p-4'
      >
        <div>
          <a data-testid={ logoLink } href='https://www.buupe.com/register' target='_blank' rel='noopener noreferrer'>
            <img className='hover:scale-105 duration-125' src={imageUrl} alt='Logo' />
          </a>
        </div>
        <form onSubmit={ handleSearch } className='w-full lg:max-w-xl flex flex-row items-center gap-2' action="">
          <div className='w-full relative'>
            <input
              data-testid={ searchComponent }
              value={ query }
              onChange={ handleChange }
              type="text"
              placeholder='Buscar produtos...'
              className='border rounded-md pl-3 pr-8 p-1 border-gray-400 w-full focus-visible:outline-none'
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
        <div className='hidden lg:block' />
      </section>
      <div className='w-full lg:hidden bg-gradient-to-r from-secondary to-primary py-2 px-6 flex flex-row items-center justify-between'>
        <button className='bg-white p-2 rounded-md text-primary' onClick={handleToggleDrawer}>
          <MdFilterAlt size={30} />
        </button>
        <div className='text-white'>
          <ClearFilterButton color='inherit' />
        </div>
      </div>
    </header>
  )
}