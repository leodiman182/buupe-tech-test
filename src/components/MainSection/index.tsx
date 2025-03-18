import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import useAppContext from "../../context/useAppContext.ts";
import useResetSearch from "../../hooks/useResetSearch.ts";
import NotFound from "../NotFound";
import InfiniteScroll from "react-infinite-scroll-component";
import TProduct from "../../types/TProduct.ts";

export default function MainSection() {
  const { data } = useAppContext();
  const resetSearch = useResetSearch();
  const [itemsToShow, setItemsToShow] = useState(10);
  const [visibleProducts, setVisibleProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    resetSearch();
    setVisibleProducts(data.slice(0, itemsToShow));
  }, [data]);

  const fetchMoreData = () => {
    setTimeout(() => {
      setItemsToShow(itemsToShow + 10);
      setVisibleProducts(data.slice(0, itemsToShow + 10));
    }, 1000);
  };

  return (
    <article className='w-full lg:w-5/6 lg:pl-12'>
      <InfiniteScroll
        dataLength={visibleProducts.length}
        next={fetchMoreData}
        hasMore={visibleProducts.length < data.length}
        loader={<h4>Carregando...</h4>}
      >
        <section className='w-full grid grid-cols-1 gap-4 lg:gap-0 text-center'>
          {!visibleProducts.length ? (
            <NotFound />
          ) : (
            visibleProducts.map((product, index) => (
              <div key={index}>
                <ProductCard product={product} />
              </div>
            ))
          )}
        </section>
      </InfiniteScroll>
    </article>
  );
}