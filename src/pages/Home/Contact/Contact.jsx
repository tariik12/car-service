import { FaBuffer,FaPhone,FaMapMarkedAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="h-60 lg:flex p-16 bg-black rounded-lg text-white" >
            <div className="mx-auto space-y-3 flex items-center ">
                <FaBuffer  className="bg-red-800 h-10 w-12 me-4 mt-4"/>
               <div>
               <p>We are open monday-friday</p>
                <h4 className="text-xl font-bold">7:00 am - 9:00 pm</h4>
               </div>
            </div>
            <div className="mx-auto space-y-3 flex items-center ">
                <FaPhone  className="bg-red-800 h-10 w-12 me-4 mt-4"/>
               <div>
               <p>Have a question?</p>
                <h4 className="text-xl font-bold">+2546 251 2658</h4>
               </div>
            </div>
            <div className="mx-auto space-y-3 flex items-center ">
                <FaMapMarkedAlt  className="bg-red-800 h-10 w-12 me-4 mt-4"/>
               <div>
               <p>Need a repair? our address</p>
                <h4 className="text-xl font-bold">Liza Street, New York</h4>
               </div>
            </div>
        </div>
    );
};

export default Contact;