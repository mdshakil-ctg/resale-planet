import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/UserContext';


const MyProducts = () => {
//   const [products, setProducts] = useState([])
   const {user} = useContext(AuthContext)
   

   const {data: products=[], isLoading, refetch} = useQuery({
      queryKey: ['allDoctors', user.email],
      queryFn: ()=> fetch(`http://localhost:5000/dashboard/my-product?email=${user.email}`)
      .then(res=>res.json())
   })

   
   // useEffect(()=>{
   //    fetch(`http://localhost:5000/dashboard/my-product?email=${user.email}`)
   //    .then(res=> res.json())
   //    .then(data=> setProducts(data))
   // },[user.email])
   // console.log(products)

   const handleDelete = id =>{
      fetch(`http://localhost:5000/dashboard/my-product/${id}`, {
         method: 'DELETE',
         headers:{
            'content-type': 'application/json'
         }
      })
      .then(res=>res.json())
      .then(data=>{
         console.log(data)
         if(data.result.deletedCount > 0){
            toast.success(`Product ${data.name.name} Removed Succesfully`)
            refetch()
         }
      })
      .catch(err => console.error(err))
   }
  
      const handleAdvertise = id =>{
         fetch(`http://localhost:5000/dashboard/addvertise/${id}`,{
            method: 'POST',
            headers:{
               'content-type': 'application/json',
               authorization: `bearer ${localStorage.getItem('token')}`
            }
         }).then(res=>res.json())
         .then(result => {
            console.log(result)
            if(result.acknowledged){
               toast('Product added to the homepage for advertized')
            }
            toast(result.message)
         })
         .catch(err=> console.log(err))
      }
   
   return (
      <div>
         <h2>this is my product page</h2>
         <div>
         <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Model Name</th>
        <th>Phone</th>
        <th>Buyer Location</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     
      {
         products.map((product, i) =>  <tr key={i} className="hover">
         <th><img className='w-20 rounded-md' src={product.img_url} alt="" /></th>
         <td>{product.carModel}</td>
         <td>{product.phone}</td>
         <td>{product.location}</td>
         <td>
         <button onClick={()=>handleDelete(product._id)} className='btn btn-xs btn-warning'>Delete Product</button>
         <button onClick={()=>handleAdvertise(product._id)} className='btn btn-xs btn-warning'>Advertise</button>
         </td>

       </tr>)
      }
     
     
      
      
    </tbody>
  </table>
</div>
         </div>
      </div>
   );
};

export default MyProducts;