import icon1 from "../../../assets/icons/ic1.svg"
import icon2 from "../../../assets/icons/ic2.svg"
import icon4 from "../../../assets/icons/ic4.svg"
import icon5 from "../../../assets/icons/ic5.svg"
import icon6 from "../../../assets/icons/ic6.svg"
import icon7 from "../../../assets/icons/ic7.svg"

const Core_Features = () => {
    return (
        <div className="my-32">
           <div className="text-center mb-20">
        <h4 className="text-lg text-orange-600 font-bold">Core Features</h4>
        <h4 className="text-4xl font-bold ">Why Choose Us</h4>
        <p className="mt-6 mb-8 w-1/2 mx-auto space-x-3 space-y-3">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
    </div> 
    <div className="grid grid-cols-3 lg:grid-cols-6 justify-items-center ">
        <img className="w-20 h-20" src={icon1} alt="" />
        <img className="w-20 h-20" src={icon2} alt="" />
        <img className="w-20 h-20" src={icon4} alt="" />
        <img className="w-20 h-20" src={icon5} alt="" />
        <img className="w-20 h-20" src={icon6} alt="" />
        <img className="w-20 h-20"src={icon7} alt="" />
    </div>
        </div>
    );
};

export default Core_Features;