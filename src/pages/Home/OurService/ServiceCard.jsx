
import { FaLongArrowAltLeft } from "react-icons/fa";
const ServiceCard = ({service}) => {
    const {title,price,img} =service;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
 <img className="h-48" src={img} alt="Shoes" />
  <div className=" flex items-end justify-around py-10 ">
    <div>
    <h2 className="card-title">{title}</h2>
    <p className="text-orange-600">Price: ${price}</p>
    </div>
      <FaLongArrowAltLeft  className="text-orange-500 "/>
  </div>
</div>
    );
};

export default ServiceCard;