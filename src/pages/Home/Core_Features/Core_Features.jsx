import icon1 from "../../../assets/icons/ic1.svg"
import icon2 from "../../../assets/icons/ic2.svg"
import icon3 from "../../../assets/icons/ic3.svg"
import icon4 from "../../../assets/icons/ic4.svg"
import icon5 from "../../../assets/icons/ic5.svg"
import icon6 from "../../../assets/icons/ic6.svg"
import icon7 from "../../../assets/icons/ic7.svg"

const Core_Features = () => {
    return (
        <div>
           <div className="text-center mt-32">
        <h4 className="text-lg text-orange-600 font-bold">Core Features</h4>
        <h4 className="text-4xl font-bold ">Why Choose Us</h4>
        <p className="mt-6 mb-8 w-1/2 mx-auto space-x-3 space-y-3">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
    </div> 
    <div className="flex">
        <img src={icon1} alt="" />
        <img src={icon2} alt="" />
        <img src={icon3} alt="" />
        <img src={icon4} alt="" />
        <img src={icon5} alt="" />
        <img src={icon6} alt="" />
        <img src={icon7} alt="" />
    </div>
        </div>
    );
};

export default Core_Features;