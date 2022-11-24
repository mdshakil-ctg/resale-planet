import React, { useContext } from "react";
import  { AuthContext } from "../../../Context/UserContext";

const About = () => {
  const {createUser} = useContext(AuthContext)
  console.log(createUser)
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center mt-12">How Resale Planet Works</h2>
      <p className="w-1/2 mx-auto text-gray-500 my-3">
        We aggregate millions of listings from dealers and private sellers,
        showing all the results for your search from each of our listings
        partners. We also generate comparison links for the remaining large
        sites we don't yet have partnerships with. Our goal is to capture all
        the results in single search, to save you time and help you find your
        ideal next car.
      </p>
      <div className="grid grid-cols-3">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/c1ZcffD/about04.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Just the Cars You Want</h2>
            <p>AutoTempest supports extensive search filtering for attributes from fuel type to interior color. Cast your net locally or across the country.</p>
            <div className="card-actions">
              <button className="btn btn-primary">See More</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/KysKZpn/about02.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Browse Results</h2>
            <p>AutoTempest provides millions of listings from a variety of sources. Browse them by source, or all in a single list, with all the sorting options you'd expect.</p>
            <div className="card-actions">
              <button className="btn btn-primary">See More</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/s2V07hh/about03.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Search on Any Device</h2>
            <p>AutoTempest works well in your browser - on any device. This means you get the full power of AutoTempest on your phone, tablet, laptop or desktop.</p>
            <div className="card-actions">
              <button className="btn btn-primary">See More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

