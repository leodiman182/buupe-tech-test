import {imageUrl} from "../../assets/logo.ts";
import useAppContext from "../../context/useAppContext.ts";
import {ChangeEvent, FormEvent, FormEventHandler, useState} from "react";
import Button from "../Button";

export default function Header() {
  const {setSearchQuery} = useAppContext();
  const [query, setQuery] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

  const handleSearch: FormEventHandler<HTMLFormElement> = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(query);
  };

  return (
    <header className='w-full bg-white p-4'>
      <section
        className='max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 w-full'>
        <div className=''>
          <img className='' src={imageUrl} alt=""/>
        </div>
        <form onSubmit={handleSearch} className='w-full lg:max-w-md flex flex-row items-center gap-2' action="">
          <input
            value={query}
            onChange={handleChange}
            type="text"
            placeholder='Buscar produtos...'
            className='border rounded-md pl-3 p-1 border-gray-400 w-full focus-visible:outline-none'
          />
          <Button>Buscar</Button>
        </form>
      </section>
    </header>
  )
}