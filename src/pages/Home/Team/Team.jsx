import  { useEffect, useState } from 'react';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImFacebook,ImTwitter } from "react-icons/im";
import { GrInstagram,GrLinkedinOption } from "react-icons/gr";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Team.css'

// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);

const Team = () => {
  const [teamExpert, setTeamExpert] = useState([])
    useEffect(() =>{
        fetch('team.json')
        .then(res =>res.json())
        .then(data =>setTeamExpert(data))
    },[])
    
    return (
        <div className="mb-32">
         <div className="text-center mt-32">
        <h4 className="text-lg text-orange-600 font-bold">Team</h4>
        <h4 className="text-4xl font-bold ">Meet Our Team</h4>
        <p className="mt-6 mb-8 w-1/2 mx-auto space-x-3 space-y-3">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
    </div>

    <Swiper
       
       
       centeredSlides={true}
       
       pagination={{
         type: 'fraction',
       }}
       navigation={true}
       virtual
       breakpoints={{
        0:{
          slidesPerView:1,
          spaceBetween:10,
        },
        480:{
          slidesPerView:2,
          spaceBetween:10,
        },
        768:{
          slidesPerView:3,
          spaceBetween:15,
        },
        124:{
          slidesPerView:4,
          spaceBetween:15,
        },
        1280:{
          slidesPerView:5,
          spaceBetween:30,
        }
       }}
     >
       {teamExpert.map((slideContent, index) => (
         <SwiperSlide key={slideContent._id} virtualIndex={index}>
           <SwiperSlide key={slideContent._id} virtualIndex={index}>
           <div className="card w-96 bg-base-100 shadow-xl">
 <figure className="px-10 ">
   <img src={slideContent.img} alt="Shoes" className="rounded-xl" />
 </figure>
 <div className="card-body items-center text-center">
   <h2 className="card-title"> {slideContent.title}</h2>
   <p>{slideContent.expert}</p>
   <div className="card-actions flex">
<ImFacebook/>
<ImTwitter/> 
<GrInstagram/>
<GrLinkedinOption/>
   </div>
 </div>
</div>   
         </SwiperSlide>
         </SwiperSlide>
       ))}
     </Swiper>
    </div>
    );
};

export default Team;