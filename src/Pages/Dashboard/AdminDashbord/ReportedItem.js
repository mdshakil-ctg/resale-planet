import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import Loader from '../../Loader/Loader';

const ReportedItem = () => {
   const {data: reportedData=[], isLoading, refetch} = useQuery({
      queryKey: ['reported-item'],
      queryFn: ()=> fetch(`http://localhost:5000/report`)
      .then(res=>res.json())
      .then(data => {
         console.log(data)
         return data;
      })
   })

   const handleDelete = id =>{
      
      console.log(id)
      fetch(`http://localhost:5000/report`,{
         method: 'DELETE',
         headers:{
            'content-type': 'application/json',
            
         },
         body: JSON.stringify({id})
      })
      .then(res=> res.json())
      .then(data => {
         console.log(data)
         if(data.deletedCount > 0){
            toast('Item Removed Succesfully')
            refetch()
         }
      })
      
   }

   isLoading && <Loader></Loader>
   return (
      <div>
         <h1>reported items appear here{reportedData.length}</h1>
         <div className='grid grid-cols-1'>
         {
            reportedData.length>0 && 
            reportedData.map((card,i) => <div
            key={i}
            className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
               <img className='w-1/3' src={card?.img_url} alt="" />
              <h2 className="card-title">Model : {card?.name}</h2>
              <p>Reported User : {card?.email}</p>
              <p>Seller Name : {card?.seller_name}</p>
              <button onClick={()=>handleDelete(card?.report_id)} className='btn btn-sm btn-warning'>Delete Product</button>
              <div className="card-actions justify-end">
                
              </div>
            </div>
          </div>)
         }
         </div>
      </div>
   );
};

export default ReportedItem;