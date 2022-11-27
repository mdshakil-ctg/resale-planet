import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import './DisplayError.css'


const DisplayError = () => {
   const {error} = useContext(AuthContext)
   const routerError = useRouteError()
   const {logOut} = useContext(AuthContext)
   const navigate = useNavigate()

   const handleLogout = () =>{
      logOut()
      .then(result => {
         navigate('/')
      })
      .catch(err => console.error(err))
    }
   return (
      <div className='main'>
         <p>Oops Something went wrong....</p>
         <p className='text-yellow-500 text-3xl text center'>{error}</p>

         <p>{routerError?.statusText || routerError?.message}</p>
         <Link to='/'><button className='btn btn-info'>Go To Home</button></Link>
         <a href='/'><button onClick={handleLogout} className='btn btn-info'>Sign out</button></a>
      </div>
   );
};

export default DisplayError;