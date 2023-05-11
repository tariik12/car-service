import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const OurService = () => {
    const [services,setServices] = useState([])

    useEffect(() =>{

        fetch('ourService.json')
        .then(res =>res.json())
        .then(data =>setServices(data))
    },[])
    return (
        <div>
            <div className="text-center mt-32">
                <h4 className="text-lg text-orange-600 font-bold">Service</h4>
                <h4 className="text-4xl font-bold ">Our Service Area</h4>
                <p className="mt-6 mb-8 w-1/2 mx-auto space-x-3 space-y-3">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                {
                    services.map(service =><ServiceCard
                         key={service._id}
                         service={service}
                         ></ServiceCard>)
                }
            </div>

            <div className="w-36 mx-auto mt-20 mb-32 shadow-2xl">
            <button className="btn btn-secondary btn-outline ">More Services</button>
            </div>
        </div>
    );
};

export default OurService;