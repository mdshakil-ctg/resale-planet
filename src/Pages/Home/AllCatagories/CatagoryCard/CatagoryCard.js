import React from "react";
import { Link } from "react-router-dom";

const CatagoryCard = ({ catagory }) => {
  const { title, img_url, description, catagory_id } = catagory;
  return (
    <div className="card lg:w-80 glass mx-4 my-8 shadow-lg">
      <figure>
        <img className="lg:h-[200px]" src={img_url} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title h-10">{title}</h2>
        <p className="text-gray-500">{description.slice(0, 100)}...</p>
        <div className="card-actions justify-end ">
          <Link to={`/catagory/${catagory_id}`}>
            <button className="btn btn-outline btn-warning btn-sm">
              More Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CatagoryCard;
