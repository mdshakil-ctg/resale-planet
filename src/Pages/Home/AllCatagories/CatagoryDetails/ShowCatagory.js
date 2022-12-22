import React, { useContext } from "react";
import { AuthContext } from "../../../../Context/UserContext";
import toast from "react-hot-toast";

const ShowCatagory = ({ catagory, setModalData }) => {
  const { user } = useContext(AuthContext);

  const {
    name,
    img_url,
    location,
    price,
    original_price,
    used_duration,
    post_time,
    seller_name,
    _id,
  } = catagory;

  const product = {
    name,
    img_url,
    location,
    price,
    original_price,
    used_duration,
    post_time,
    seller_name,
    report_id: _id,
    email: user.email,
  };

  const handleReport = (reportProduct) => {
    console.log(reportProduct);

    fetch(`https://resale-planet-server.vercel.app/report`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(reportProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message) {
          toast(data.message);
        }
        if (data.acknowledged) {
          toast("Product has to be reported to the admin");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    catagory.purchased || (
      <div className="card glass lg:my-20">
        <figure>
          <img className="h-60 w-full" src={img_url} alt="car!" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div>
              {catagory.status !== "verifyed" ? (
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm rounded-full"
                  defaultChecked
                />
              ) : (
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-sm checkbox-info rounded-full"
                  />
                  <span className="ml-1">verifyed</span>
                </div>
              )}
            </div>
            <button
              onClick={() => handleReport(product)}
              className="btn btn-sm btn-warning"
            >
              Report
            </button>
          </div>
          <h2 className="card-title font-semibold">
            Model : <span className=" text-xl ">{name}</span>
          </h2>
          <p className="font-semibold">
            Price : <span className="text-sm text-gray-500">${price}</span>
          </p>
          <p className="font-semibold">
            Original Price :{" "}
            <span className="text-sm text-gray-500 ">${original_price}</span>
          </p>
          <p className="font-semibold">
            Used :{" "}
            <span className="text-sm text-gray-500">{used_duration} Month</span>
          </p>
          <p className="font-semibold">
            Posted At:{" "}
            <span className="text-sm text-gray-500">{post_time}</span>
          </p>
          <p className="font-semibold">
            Location : <span className="text-sm text-gray-500">{location}</span>
          </p>
          <p className="font-semibold">
            Seller :{" "}
            <span className="text-sm text-gray-500">{seller_name}</span>
          </p>
          <div className="card-actions">
            {catagory.status !== "verifyed" || (
              <label
                onClick={() => setModalData(catagory)}
                htmlFor="booking-modal"
                className="btn btn-outline btn-warning w-full mt-3 btn-sm"
              >
                Book Now
              </label>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default ShowCatagory;
