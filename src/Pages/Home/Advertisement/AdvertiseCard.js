import React from "react";

const AdvertiseCard = ({ product }) => {
  const {
    name,
    price,
    img_url,
    phone,
    post_time,
    specialty,
    used_duration,
    location,
    purchased,
  } = product;
  return (
    purchased || (
      <div className="card lg:w-80 glass mx-4 my-8 shadow-lg">
        <figure>
          <img className="w-full h-48" src={img_url} alt="Shoes" />
        </figure>
        <div className="card-body text-left text-sm">
          <h2 className="card-title font-semibold">
            Model : <span className="font-bold">{name}</span>
          </h2>
          <p className="font-semibold">
            Price : <span className="text-red-400 text-xl">${price}</span>
          </p>
          <p className="font-semibold">
            Phone : <span className="font-normal text-gray-600">{phone}</span>
          </p>
          <p className="font-semibold">
            Condition :{" "}
            <span className="font-normal text-gray-600">{specialty}</span>
          </p>
          <p className="font-semibold">
            Used :{" "}
            <span className="font-normal text-gray-600">
              {used_duration} month
            </span>{" "}
          </p>
          <p className="font-semibold">
            Location :{" "}
            <span className="font-normal text-gray-600">{location}</span>
          </p>
          <p className="font-semibold">
            Posted on:{" "}
            <span className="font-normal text-gray-600">{post_time}</span>
          </p>
          <div className="card-actions justify-end mt-3 ">
            <button className="btn btn-outline btn-warning btn-sm">
              Book now
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default AdvertiseCard;
