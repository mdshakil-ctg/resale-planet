import React from "react";

const ShowCatagory = ({ catagory }) => {
  const {
    name,
    img_url,
    location,
    price,
    original_price,
    used_duration,
    post_time,
    seller_name,
    veryfied_seller
  } = catagory;
  return (
   <div className="card glass mx-10 my-20">
  <figure><img src={img_url} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>

    <p>Price : ${price}</p>
    <p>Original Price : ${original_price}</p>
    <p>Used : {used_duration} Month</p>
    <p>Posted At: {post_time}</p>
    <p>Location : {location}</p>
    <p>Seller : {seller_name}</p>
    {
      veryfied_seller !== 'true' ? <input type="checkbox" className="checkbox" disabled checked /> : <>
      <input type="checkbox" checked className="checkbox checkbox-success" />
      <button className="btn btn-primary">Book Now</button>
      </>
    }
    
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
  );
};

export default ShowCatagory;
