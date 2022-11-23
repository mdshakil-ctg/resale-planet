import React from "react";

const CatagoryCard = ({catagory}) => {
   const {title, img_url, description} = catagory;
  return (
   <div className="card w-96 glass">
   <figure>
     <img src={img_url} alt="car!" />
   </figure>
   <div className="card-body">
     <h2 className="card-title">{title}</h2>
     <p>{description}</p>
     <div className="card-actions justify-end">
       <button className="btn btn-primary">Learn now!</button>
     </div>
   </div>
 </div>
  );
};

export default CatagoryCard;
