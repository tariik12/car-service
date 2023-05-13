
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({service}) => {
    const {_id,title,price,img} =service;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
 <img className="h-48" src={img} alt="Shoes" />
  <div className=" flex items-end justify-around py-10 ">
    <div>
    <h2 className="card-title">{title}</h2>
    <p className="text-orange-600">Price: ${price}</p>
    </div>
      <Link to={`/checkout/${_id}`}><FaLongArrowAltLeft  className="text-orange-500 "/></Link>
  </div>
</div>
    );
};

export default ServiceCard;