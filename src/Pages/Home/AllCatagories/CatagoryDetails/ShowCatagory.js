import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../Context/UserContext";

const ShowCatagory = ({ catagory, setModalData }) => {
  
  const { user } = useContext(AuthContext);
  // console.log(user);
  const {
    name,
    img_url,
    location,
    price,
    original_price,
    used_duration,
    post_time,
    seller_name,
    veryfied_seller,
    _id
  } = catagory;
  console.log(catagory)

  return (
    <div className="card glass mx-10 my-20">
      <figure>
        <img src={img_url} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <p>Price : ${price}</p>
        <p>Original Price : ${original_price}</p>
        <p>Used : {used_duration} Month</p>
        <p>Posted At: {post_time}</p>
        <p>Location : {location}</p>
        <p>Seller : {seller_name}</p>
        {catagory?.status !== "verifyed" ? (
          <input type="checkbox" className="checkbox" checked />
        ) : (
          <>
            <input
              type="checkbox"
              checked
              className="checkbox checkbox-success"
            />
            <label onClick={()=>setModalData(catagory)} htmlFor="booking-modal" className="btn">
              Book Now
            </label>
          </>
        )}

        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default ShowCatagory;
