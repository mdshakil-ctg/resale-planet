import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';
import Loader from '../Loader/Loader';
import BuyerBookingCard from './buyerBookingCard/BuyerBookingCard';

const BuyerDashboard = () => {
   const {user} = useContext(AuthContext)
   const email = user?.email
   const {data : bookingData = [], isLoading} = useQuery({
      queryKey: ['bookingData', email],
      queryFn: () => fetch(`http://localhost:5000/dashboard/myorder?email=${email}`)
      .then(res => res.json())
      .then(data=>{
         console.log(data)
         return data
      })
    })
    
    if(isLoading){
      return <Loader></Loader>
    }

   return (
      <div>
        <h1>bookingdata {bookingData.length}</h1>
        {
        bookingData.length > 0 &&
        bookingData.map((booking,i)=> <BuyerBookingCard
        key={i}
        booking={booking}
        ></BuyerBookingCard>)
        }
      </div>
   );
};

export default BuyerDashboard;