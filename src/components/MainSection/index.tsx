import ProductCard from "../ProductCard";
import {useEffect} from "react";
import useAppContext from "../../context/useAppContext.ts";
import useResetSearch from "../../hooks/useResetSearch.ts";
import products from "../../mock/products.ts";

export default function MainSection() {
  const { data, searchQuery } = useAppContext();
  const resetSearch = useResetSearch();

  useEffect(() => {
    resetSearch();
  }, []);

  function filterResults(searchQuery: string) {
    if (searchQuery === '') {
      return resetSearch();
    }

    const query = searchQuery.toLowerCase();

    return products.filter(product => {
      const nameMatch = product.productName.toLowerCase().includes(query);
      const descriptionMatch = product.productDescription.toLowerCase().includes(query);
      return nameMatch || descriptionMatch;
    });
  }

  return (
    <article className='lg:w-5/6 p-4'>
      <section className='w-full grid grid-cols-1 lg:grid-cols-3 gap-3 text-center'>
        {data.map((product, index) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </section>
    </article>
  )
}