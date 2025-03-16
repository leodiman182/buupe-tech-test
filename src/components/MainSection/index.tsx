import products from "../../mock/mock.ts";
import ProductCard from "../ProductCard";

export default function MainSection() {
  return (
    <article className='bg-blue-600 w-5/6 p-4'>
      <section className='w-full grid grid-cols-1 lg:grid-cols-3 gap-3'>
        {products.map(product => (
          <ProductCard product={product} />
        ))}
      </section>
    </article>
  )
}