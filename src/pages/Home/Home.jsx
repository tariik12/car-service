
import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Core_Features from "./Core_Features/Core_Features";
import OurService from "./OurService/OurService";
import Popular_Product from "./Popular_Product/Popular_Product";
import Team from "./Team/Team";
import Testimonial from "./Testimonial/Testimonial";





const Home = () => {
    return (
        <div className="">
           
            <Banner></Banner>
            <About></About>
            <OurService></OurService>
            <Contact></Contact>
            <Popular_Product></Popular_Product>
            <Team></Team>
            <Core_Features></Core_Features>
            <Testimonial></Testimonial>
            
           
          
        </div>
    );
};

export default Home;