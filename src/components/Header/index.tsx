import {imageUrl} from "../../assets/logo.ts";
import useAppContext from "../../context/useAppContext.ts";
import {ChangeEvent, FormEvent, FormEventHandler, useState} from "react";
import Button from "../Button";
import {IoMdCloseCircleOutline} from "react-icons/io";

export default function Header() {
  const {setSearchQuery} = useAppContext();
  const [query, setQuery] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

  const handleSearch: FormEventHandler<HTMLFormElement> = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(query);
    console.log('chegou aqui')
  };

  return (
    <header className='w-full bg-white p-4'>
      <section
        className='max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 w-full'>
        <div className=''>
          <img className='' src={imageUrl} alt=""/>
        </div>
        <form onSubmit={handleSearch} className='w-full lg:max-w-md flex flex-row items-center gap-2' action="">
          <div className='w-full relative'>
            <input
              value={query}
              onChange={handleChange}
              type="text"
              placeholder='Buscar produtos...'
              className='border rounded-md pl-3 p-1 border-gray-400 w-full focus-visible:outline-none'
            />
            {query !== '' && <IoMdCloseCircleOutline onClick={reset} className='absolute right-1 top-1 text-stone-500 hover:text-red-700 cursor-pointer z-10' size={25} />}
          </div>
          <Button>Buscar</Button>
        </form>
      </section>
    </header>
  )
}