import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseCard from './AdvertiseCard';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const Advertisement = () => {
   const [products, setProducts] = useState([])

   const getApiData = async() =>{
      try{
         const res = await axios.get('http://localhost:5000/advertise')
         setProducts(res.data)
      }
      catch{

      }
   }

   useEffect(()=>{
      getApiData()
   },[])

   return (
      <div className='text-center my-24'>
         <h1 className='text-4xl'>this is advertise page</h1>
        <div className='grid grid-cols-3 gap-5 my-10'>
        {
            products.length>0 &&
            products?.map(product => <AdvertiseCard
            key={product._id}
            product={product}
            ></AdvertiseCard>)
         }
        </div>
      </div>
   );
};

export default Advertisement;