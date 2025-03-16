import TProduct from "../../types/TProduct.ts";
import formatToCurrency from "../../utils/formatCurrency.ts";

interface IProductCard {
  product: TProduct;
}

export default function ProductCard({product}: IProductCard) {
  const {
    productImg,
    productDescription,
    productName,
    productPrice
  } = product;

  return (
    <div className='bg-white rounded-md p-4 lg:p-8 flex flex-col gap-4'>
      <img src={productImg} alt=""/>
      <div>
        <p>
          {productName}
        </p>
        <span>
        {productDescription}
      </span>
        <p>
          {formatToCurrency(productPrice)}
        </p>
      </div>
    </div>
  )
}