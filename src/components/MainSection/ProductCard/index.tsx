import TProduct from "../../../types/TProduct.ts";
import formatToCurrency from "../../../utils/formatCurrency.ts";
import previousPrice from "../../../utils/previousPrice.ts";

interface IProductCard {
  product: TProduct;
}

export default function ProductCard({ product }: IProductCard) {
  const {
    productImg,
    productDescription,
    productName,
    productPrice
  } = product;

  return (
    <div className='bg-white rounded-md p-4 lg:p-8 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-10'>
      <img src={ productImg } alt={ productDescription } className='lg:max-w-[320px]' />
      <div className='text-start'>
        <h4 className='text-2xl text-gray-800 font-bold'>
          { productName }
        </h4>
          <span className='text-sm text-gray-600'>
          { productDescription }
        </span>
        <div className='mt-4 lg:mt-8'>
          <div className='flex flex-row items-center gap-4'>
            <p className='text-3xl'>
              { formatToCurrency(productPrice) }
            </p>
            <p className='text-sm text-gray-600 line-through'>
              {formatToCurrency(previousPrice(productPrice))}
            </p>
          </div>
        </div>
        <div className='mt-4 text-center'>
          <div className='bg-green-200 lg:text-center font-medium text-green-700 rounded-md w-52 lg:w-auto'>
            Chega grátis amanhã
          </div>
        </div>
      </div>
    </div>
  )
}