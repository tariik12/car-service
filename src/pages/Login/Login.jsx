import log from '../../assets/images/login/login.svg'
import { ImFacebook,ImTwitter } from "react-icons/im";
import { GrInstagram,GrLinkedinOption } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
const Login = () => {
  const { singIn} = useContext(AuthContext);
  const handleLogin =event =>{

      event.preventDefault()
      const form = event.target
      const email = form.email.value;
      const password = form.password.value;
      console.log(email,password)

      singIn(email,password)
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
        <h1 className='text-4xl font-bold text-center' >Login</h1>
      <form onSubmit={handleLogin}>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" name='password' className="input input-bordered" />
          <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  
                  <a href="#" className="label-text-alt link link-hover"> If no account? <Link to='/register'>Register</Link></a>
                </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className='bg-primary' value='login' />
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

export default Login;