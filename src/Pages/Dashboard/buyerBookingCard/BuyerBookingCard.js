import React from 'react';

const BuyerBookingCard = ({booking}) => {
   const {carModel,email, img_url ,location ,original_price, phone ,price, used_duration ,userName} = booking
   
   return (
      <div className="card card-compact w-1/2 mx-auto bg-base-100 shadow-xl">
         <figure><img src={img_url} alt="Shoes" /></figure>
         <div className="card-body">
           <h2 className="card-title">{carModel}</h2>
           <p>{price}</p>
           <p>{original_price}</p>
           <p>{phone}</p>
           <p>{used_duration}</p>
           <p>{userName}</p>
           <p>{location}</p>
          
           <div className="card-actions justify-end">
             <button className="btn btn-primary">Pay</button>
           </div>
         </div>
       </div>
   );
};

export default BuyerBookingCard;