import ProductCard from "./ProductCard";
import {useEffect} from "react";
import useAppContext from "../../context/useAppContext.ts";
import useResetSearch from "../../hooks/useResetSearch.ts";
import NotFound from "../NotFound";

export default function MainSection() {
  const { data } = useAppContext();
  const resetSearch = useResetSearch();

  useEffect(() => {
    resetSearch();
  }, []);

  return (
    <article className='w-full lg:w-5/6 p-4 lg:pl-12'>
      <section className='w-full grid grid-cols-1 gap-3 text-center'>
        {!data.length ? (
          <NotFound />
        ) : data.map((product, index) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </section>
    </article>
  )
}