import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';


const Register = () => {

   const {createUser} = useContext(AuthContext)
   const navigate = useNavigate();
   const location = useLocation();
   const from = location?.state?.from?.pathname || '/';
   const handleRegister = (event) =>{
     
     event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name,photo,email, password)

      createUser(email, password)
      .then(result=>{
        const user = result.user;

        const currentUser = {
          email: user.email
        }
        fetch('http://localhost:5000/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
        })
        .then(res =>res.json())
        .then(data=> {
          localStorage.setItem('token' , data.token)
          navigate(from, {replace:true})
        })
        .catch(err => console.error(err))

      })
      .catch(err=>console.log(err))

   }



   return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">You have to Register to take an deep look in our services. There are many ways to take you up at register options. Please fill up the form to proceed.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input name='name' type="text" placeholder="Your Full Name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input name='photo' type="text" placeholder="Your Photo Url" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name='email' type="text" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name='password' type="text" placeholder="password" className="input input-bordered" />
              
              <label className="label">
                <p><small>Already Have an Account?</small> <Link to='/login' className="label-text-alt link link-hover font-bold">Login Here</Link></p>
              </label>
            </div>
            <div className=" mt-0">
              <button type='submit' className="btn btn-outline-warning w-full">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
   );
};

export default Register;