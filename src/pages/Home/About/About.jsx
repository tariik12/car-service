import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className='hero main-h-screen bg-base-200 '>
            <div className='hero-content flex-col lg:flex-row'>
                <div className='lg:w-1/2 relative'>
                    <img className='w-3/4 rounded-lg shadow-2xl' src={person} alt="" />
                    <img  className='w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl' src={parts} alt="" />
                </div>
                <div className='lg:w-1/2 space-y-5 p-4'>
                <h4 className='tex-3xl text-orange-500 font-bold'>About Us</h4>
           <h1 className='text-5xl font-bold'>We are qualified & of experience in this field</h1>
           <p className=''>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don,t look even slightly believable. </p>
           <p className=''>the majority have suffered alteration in some form, by injected humour, or randomised words which don,t look even slightly believable. </p>
           <button className="btn btn-secondary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;