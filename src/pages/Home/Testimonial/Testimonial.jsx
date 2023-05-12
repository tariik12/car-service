
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import TestCard from "./TestCard";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}


const Testimonial = () => {
    const [testimonials, setTestimonial] = useState([])
    useEffect(() =>{
        fetch('testimonial.json')
        .then(res =>res.json())
        .then(data => setTestimonial(data))
    },[])
        const settings = {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        };
    return (
        <div>
             <div className="text-center mt-20">
        <h4 className="text-lg text-orange-600 font-bold">Testimonial</h4>
        <h4 className="text-4xl font-bold ">What Customer Says</h4>
        <p className="mt-6 mb-8 w-1/2 mx-auto space-x-3 space-y-3">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
        </div>
        <Slider {...settings}>
        {
          testimonials.map(tes=><TestCard key={tes._id}
          tes={tes}
          ></TestCard>)
        }  
        </Slider>
        </div>
    );
};

export default Testimonial;