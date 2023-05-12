import log from '../../assets/images/login/login.svg'

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row ">
    <div className="text-center lg:text-left">
      <img src={log} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <h1 className='text-4xl font-bold text-center' >Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
      <div className='mx-auto w-1/2'>
        <h4 className='ms-10'>Or Sing In Width</h4>
        <h4 className='ms-10'>Or Sing In Width</h4>
        <h4 className='ms-10'>Or Sing In Width</h4>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;