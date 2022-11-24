import React from "react";
import { Link } from "react-router-dom";

const CatagoryCard = ({catagory}) => {
   const {title, img_url, description, catagory_id} = catagory;
  return (
   <div className="card w-96 glass">
   <figure>
     <img src={img_url} alt="car!" />
   </figure>
   <div className="card-body">
     <h2 className="card-title">{title}</h2>
     <p>{description}</p>
     <div className="card-actions justify-end">
       <Link to={`/catagory/${catagory_id}`}><button className="btn btn-primary">Learn now!</button></Link>
     </div>
   </div>
 </div>
  );
};

export default CatagoryCard;
