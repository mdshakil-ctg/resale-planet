import React, { useContext } from "react";
import { HeartIcon } from '@heroicons/react/24/solid'
import { AuthContext } from "../../../../Context/UserContext";

const ShowCatagory = ({ catagory, setModalData }) => {
  const {user} = useContext(AuthContext)
  // const { user } = useContext(AuthContext);
  // const product = {...catagory}
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
    _id
  } = catagory;
  console.log("cataa",catagory);

  // const handleReport = input =>{
    
  //   fetch(`http://localhost:5000/product/report`,{
  //     method: 'POST',
  //     headers: {
  //       authorization: `bearer ${localStorage.getItem('token')}`
  //     },
  //     body: JSON.stringify(input)
  //   })
  //   .then(res => res.json())
  //   .then(result => {
  //     console.log(result)
  //   })
  //   .catch(err => console.error(err))
  // }
  const product ={
    name,
    img_url,
    location,
    price,
    original_price,
    used_duration,
    post_time,
    seller_name,
    report_id: _id,
     email: user.email}
  // const handleWishList = id =>{
    
  //   fetch(`http://localhost:5000/wishlist`,{
  //     method: 'POST',
  //     headers: {'content-type': 'application/json'},
  //     body: JSON.stringify(product)
  //   })
  //   .then(res=> res.json())
  //   .then(data => {console.log(data)})
  //   .catch(err => console.log(err))
  // }

  const handleReport = (reportProduct) => {
    console.log(reportProduct)

    fetch(`http://localhost:5000/report`,{
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(reportProduct)
    })
    .then(res=> res.json())
    .then(data => {console.log(data)})
    .catch(err => console.log(err))

  }

  return (
    catagory.purchased ||
    <div className="card glass mx-10 my-20">
      <figure>
        <img src={img_url} alt="car!" />
      </figure>
      <div className="card-body">
        {/* <span onClick={()=>handleWishList(_id)}><HeartIcon className="h-8 w-8  text-yellow-500"/></span> */}
        

        <button onClick={()=>handleReport(product)} className="btn btn-sm btn-warning">Report To Admin</button>
        <h2 className="card-title">{name}</h2>

        <p>Price : ${price}</p>
        <p>Original Price : ${original_price}</p>
        <p>Used : {used_duration} Month</p>
        <p>Posted At: {post_time}</p>
        <p>Location : {location}</p>
        <p>Seller : {seller_name}</p>
        

        {catagory?.status !== "verifyed" ? (
          <input type="checkbox" className="checkbox checkbox-sm rounded-full"  defaultChecked  />
        ) : (
          <>
            <input
              type="checkbox"
              defaultChecked 
              className="checkbox checkbox-sm checkbox-info rounded-full"
            />

            
            <label
              onClick={() => setModalData(catagory)}
              htmlFor="booking-modal"
              className="btn"
            >
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
