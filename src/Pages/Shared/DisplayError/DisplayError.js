import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';

const DisplayError = () => {
   const error = useRouteError()
   const {logOut} = useContext(AuthContext)

   const handleLogout = () =>{
      logOut()
      .then(result => {
      })
      .catch(err => console.error(err))
    }
   return (
      <div className='text-red-500'>
         <p>Oops Something went wrong....</p>
         <p>{error.statusText || error.message}</p>
         <button onClick={handleLogout} className='btn btn-info'>Sign out</button>
      </div>
   );
};

export default DisplayError;