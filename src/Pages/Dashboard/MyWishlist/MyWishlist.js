import React, { useContext } from 'react';
import { HeartIcon } from '@heroicons/react/24/solid'
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from './../../../Context/UserContext';

const MyWishlist = () => {
   const {user} = useContext(AuthContext)
   console.log(user)
   const {data: wishlistData=[], isLoading, refetch} = useQuery({
      queryKey: ['mywishlistData'],
      queryFn: ()=> fetch(`http://localhost:5000/dashboard/mywishlistData/${user?.email}`)
      .then(res=>res.json())
      .then(data =>{console.log(data)})
      .catch(err=> console.error(err))
   })
   return (
      <div>
         <HeartIcon className="h-8 w-8  text-yellow-500"/>
         <h1>this is my wishlist{wishlistData.length}</h1>
      </div>
   );
};

export default MyWishlist;