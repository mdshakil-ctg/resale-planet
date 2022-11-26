import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import './DisplayError.css'


const DisplayError = () => {
   const error = useRouteError()
   const {logOut} = useContext(AuthContext)
   const navigate = useNavigate()

   const handleLogout = () =>{
      logOut()
      .then(result => {
         navigate('/login')
      })
      .catch(err => console.error(err))
    }
   return (
      <div className='main'>
         <p>Oops Something went wrong....</p>
         <p>{error.statusText || error.message}</p>
         <Link to='/'><button className='btn btn-info'>Go To Home</button></Link>
         <a href='/'><button onClick={handleLogout} className='btn btn-info'>Sign out</button></a>
      </div>
   );
};

export default DisplayError;