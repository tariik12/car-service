import  { useEffect, useState } from 'react';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



SwiperCore.use([Virtual, Navigation, Pagination]);

const Testimonial = () => {
    const [testimonials, setTestimonial] = useState([])
    useEffect(() =>{
        fetch('testimonial.json')
        .then(res =>res.json())
        .then(data => setTestimonial(data))
    },[])
    return (
        <div>
             <div className="text-center mt-20">
        <h4 className="text-lg text-orange-600 font-bold">Testimonial</h4>
        <h4 className="text-4xl font-bold ">What Customer Says</h4>
        <p className="mt-6 mb-8 w-1/2 mx-auto space-x-3 space-y-3">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
        </div>
        <Swiper
       
       slidesPerView={2}
       centeredSlides={true}
       spaceBetween={30}
       pagination={{
         type: 'fraction',
       }}
       navigation={true}
       virtual
     >
       {testimonials.map((slideContent, index) => (
        
           <SwiperSlide key={slideContent._id} virtualIndex={index}>
           <div className="card w-96 bg-base-100 shadow-xl">
 <div className="stats shadow">
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        
          <h4>{slideContent.name}</h4>
      </div>
    </div>

  </div>
  
   <p>{slideContent.details}</p>
</div>
</div>   
      
         </SwiperSlide>
       ))}
     </Swiper>

        </div>
    );
};

export default Testimonial;