import log from '../../assets/images/login/login.svg'
import { ImFacebook,ImTwitter } from "react-icons/im";
import { GrInstagram,GrLinkedinOption } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const { createUser} = useContext(AuthContext);
    const handleRegister = event =>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value
        console.log(name,email,password,confirm)

        createUser(email,password)
        .then(result =>{
          const logeUser =result.user;
          console.log(logeUser) 
        })
        .catch(error =>{
          console.log(error.massage)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="text-center lg:text-left">
            <img src={log} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className='text-4xl font-bold text-center' >Register</h1>
              <form onSubmit={handleRegister} >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name='name' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" name='password' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="text" placeholder="Confirm Password" name='confirm' className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  
                  <a href="#" className="label-text-alt link link-hover">Already have an account? <Link to='/login'>Login</Link></a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" value='Register' className='bg-primary' />
              </div>
              </form>
            </div>
            <div className='mx-auto w-1/2'>
              <h4 className='ms-10'>Or Sing In Width</h4>
              <div className="card-actions flex p-10">
      <ImFacebook/>
      <ImTwitter/> 
      <GrInstagram/>
      <GrLinkedinOption/>
         </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;