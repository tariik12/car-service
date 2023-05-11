
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const ProductCard = ({product}) => {
    const { title,rating,img,price} = product
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl h-40" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <Rating readOnly className='w-10' spaceBetween="x-small" value={rating} />
    <p className='text-orange-700'>Price: ${price}</p>
    <div className="card-actions">
     
    </div>
  </div>
</div>
    );
};

export default ProductCard;