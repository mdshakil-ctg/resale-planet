import React from 'react';

const AdvertiseCard = ({product}) => {
   console.log(product)
   const {name,price,img_url, phone, post_time,specialty, used_duration, location} = product
   return (
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='w-full h-48' src={img_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Price : {price}</p>
    <p>Phone : {phone}</p>
    <p>Condition : {specialty}</p>
    <p>Used : {used_duration} month</p>
    <p>Location : {location}</p>
    <p>Posted on: {post_time}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Book now</button>
    </div>
  </div>
</div>
   );
};

export default AdvertiseCard;