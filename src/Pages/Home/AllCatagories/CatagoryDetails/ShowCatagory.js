import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../Context/UserContext";

const ShowCatagory = ({ catagory, setModalData }) => {
  
  const { user } = useContext(AuthContext);
  console.log(user);
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
  } = catagory;

  // const date = new Date()
  // const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  // const current_date =date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
  // const bookingDate = time + " " + current_date;



  
  // const handleBooking = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const phone = form.phone.value;
    
  //   const bookingData = {
  //     userName: user?.displayName,
  //     email: user?.email,
  //     phone,
  //     carModel: name,
  //     img_url,
  //     location,
  //     price,
  //     original_price,
  //     used_duration,
  //     bookingDate
  //   };
  //   console.log(bookingData);
  //   fetch("http://localhost:5000/bookings", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(bookingData),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.acknowledged) {
  //         toast("Booking Added on this date");
  //         // refetch();
  //       } else {
         
  //       }
  //     })
  //     .catch((err) => console.error(err));

  //   form.reset();
  // };
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
        {veryfied_seller !== "true" ? (
          <input type="checkbox" className="checkbox" disabled checked />
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

        {/* <div>
        
          <input type="checkbox" id="booking-modal" className="modal-toggle" />
          <label htmlFor="booking-modal" className="modal cursor-pointer">
            <label className="modal-box relative" htmlFor="">
              <h3 className="text-lg font-bold">
                Congratulations random Internet user!
              </h3>
              <p className="py-4">
                You've been selected for a chance to get one year of
                subscription to use Wikipedia for free!
              </p>
              <form
                onSubmit={handleBooking}
                className="grid grid-cols-1 gap-7 mt-7"
              >
                <label className="input-group">
                  <span className="w-2/6">Name</span>
                  <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  className="input input-bordered w-full"
                  id=""
                />
                </label>
                <label className="input-group">
                  <span className="w-2/6">Email</span>
                  <input
                  type="text"
                  name="email"
                  defaultValue={user?.email}
                  className="input input-bordered w-full"
                  id=""
                />
                </label>
                <label className="input-group">
                  <span className="w-2/6">Cat Model</span>
                  <input
                  type="text"
                  name="item"
                  defaultValue={name}
                  className="input input-bordered w-full"
                  id=""
                />
                </label>
                <label className="input-group">
                  <span className="w-2/6">Price</span>
                  <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  className="input input-bordered w-full"
                  id=""
                />
                </label>
                <label className="input-group">
                  <span className="w-2/6">Location</span>
                  <input
                  type="text"
                  name="location"
                  defaultValue={location}
                  className="input input-bordered w-full"
                  id=""
                />
                </label>
                <label className="input-group">
                  <span className="w-2/6">Phone No</span>
                  <input
                  type="text"
                  name="phone"
                  className="input input-bordered w-full"
                  id=""
                />
                </label>


                <input
                  type="submit"
                  value="submit"
                  className="btn btn-primary w-full"
                />
              </form>
            </label>
          </label>
        </div> */}

        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default ShowCatagory;
