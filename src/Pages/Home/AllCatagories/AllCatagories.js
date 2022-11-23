import React from 'react';
import Loader from '../../Loader/Loader';
import { useQuery } from '@tanstack/react-query';
import CatagoryCard from './CatagoryCard/CatagoryCard';

const AllCatagories = () => {
   const {data: allCatagory=[], isLoading,} = useQuery({
      queryKey: ['allCatagory'],
      queryFn: ()=> fetch('http://localhost:5000/all-catagory')
      .then(res=>res.json())
      
   })

   if(isLoading){
      return <Loader></Loader>
   }
   return (
      <div>
        <h2 className='text-4xl font-semibold text-center mt-20'>Special Catagories Brand </h2>
        <p className='text-gray-500 text-center mt-4'>All Kinds of Luxury and Premium bundle for Todays pick. You have to pick your time.</p>
       <div className='grid grid-cols-3'>
       {
         allCatagory.map(catagory=> <CatagoryCard
         key={catagory.catagory_id}
         catagory={catagory}
         ></CatagoryCard>)
       }
       </div>
      </div>
   );
};

export default AllCatagories;