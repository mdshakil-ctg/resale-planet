import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AllSeller = () => {

   const {data: users=[], isLoading, refetch} = useQuery({
      queryKey: ['allDoctors'],
      queryFn: ()=> fetch(`http://localhost:5000/dashboard/all-seller`)
      .then(res=>res.json())
   })

   const deleteUser = id =>{
      if(window.confirm('Are You sure to delete?')){
         fetch(`http://localhost:5000/user/delete/${id}`,{
         method: 'DELETE'
      })
      .then(res=> res.json())
      .then(data => {
         if(data.deletedCount > 0){
            toast('User Deleted Succesfully')
            refetch()
         }
      })
      }
   }

   const handleVerify = id =>{
      fetch(`http://localhost:5000/user/verify/${id}`)
      .then(res=> res.json())
      .then(result => {
         console.log(result)
         if(result.modifiedCount>0){
            toast('User is verified')
            refetch()
         }
      })
      .catch(err => console.log(err))
   }


   return (
      <div>
         <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     
      {
         users?.map((user, i) => <tr
         
         key={user._id}
         className="hover">
         <th>{i + 1}</th>
         <td>{user.name}</td>
         <td>{user.email}</td>
         <td><button onClick={()=>deleteUser(user._id)} className='btn btn-warning btn-sm'>Delete</button>
         {
            user.status !== "verifyed" && <button onClick={()=>handleVerify(user._id)} className='btn btn-warning btn-sm'>Verify</button>
         }
         </td>
         
       </tr>)
      }
     
    </tbody>
  </table>
</div>
      </div>
   );
};

export default AllSeller;