import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import UseToken from '../../Hook/UseToken';



const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';
  const {loginWithGoogle, signIn} = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [userEmail, setUserEmail] = useState("");
    const [token] = UseToken(userEmail)

    if(token){
      navigate(from || '/')
    }

   const handleLogin =(event) =>{
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      // console.log(email, password);
  
  
      signIn(email, password)
      .then(result=>{
        const user = result.user;
        setUserEmail(user.email)

        // const currentUser = {
        //   email: user.email
        // }
        // fetch('http://localhost:5000/jwt', {
        //   method: 'POST',
        //   headers: {
        //     'content-type': 'application/json'
        //   },
        //   body: JSON.stringify(currentUser)
        // })
        // .then(res =>res.json())
        // .then(data=> {
        //   localStorage.setItem('token' , data.token)
        //   navigate(from || '/', {replace:true})
        // })
        // .catch(err => console.error(err))

      })
      .catch(error=>{
        setError(error.message)
      })
      
    }

    const saveUserData = (name, email, role) => {
      const user = { name, email , role};
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          // setUserEmail(email);
        })
        .catch((err) => console.log(err));
    };

    const googleSignIn = () =>{
      
      loginWithGoogle()
      .then(result=>{
        const user = result.user;
        const role = 'Buyer'
      saveUserData(user?.displayName, user?.email, role)
      toast('Sign Up Succesfull')
        setUserEmail(user?.email)
        // const currentUser = {
        //   email: user.email
        // }
        // fetch('http://localhost:5000/jwt', {
        //   method: 'POST',
        //   headers: {
        //     'content-type': 'application/json'
        //   },
        //   body: JSON.stringify(currentUser)
        // })
        // .then(res =>res.json())
        // .then(data=> {
        //   localStorage.setItem('token' , data.token)
        //   navigate(from || '/', {replace:true})
        // })
        // .catch(err => console.error(err))

      })
      .catch(err => console.log(err))
    }
  

   return (
      <div>
         
         <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">You have to login first to gain our primium services. There are huge amount of content here.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
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
            <Link to='/forget' className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
          <label className="label">
            <p><small>Don't Have an Account?</small> <Link to='/register' className="label-text-alt link link-hover font-bold">Register Here</Link></p>
          </label>
            <div className='text-danger'>
            {
              error && <p>{error}</p>
            }
            </div>
        </div>
        <div className="mt-0">
          <button  type='submit' className="btn bg-slate-600 hover:btn btn-dark w-full">Login</button>
        </div>
        <div className=" mt-0">
          <button onClick={googleSignIn} className="btn glass bg-slate-600 hover:btn btn-dark w-full">Login with google</button>
        </div>        
      </form>
    </div>
  </div>
</div>

      </div>
   );
};

export default Login;