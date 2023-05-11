
import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import OurService from "./OurService/OurService";
import Popular_Product from "./Popular_Product/Popular_Product";
import Team from "./Team/Team";





const Home = () => {
    return (
        <div className="">
           
            <Banner></Banner>
            <About></About>
            <OurService></OurService>
            <Contact></Contact>
            <Popular_Product></Popular_Product>
            <Team></Team>
          
            
           
          
        </div>
    );
};

export default Home;