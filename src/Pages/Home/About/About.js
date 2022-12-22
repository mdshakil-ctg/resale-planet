import React from "react";

const About = () => {
  return (
    <div className="mb-10 lg:mb-20">
      <h2 className="text-4xl font-semibold text-center  lg:mt-20">
        How Resale Planet Works
      </h2>
      <p className="text-gray-500 text-center mt-4 mb-16 lg:mb-20 w-2/3 mx-auto lg:w-1/2 ">
        We aggregate millions of listings from dealers and private sellers,
        showing all the results for your search from each of our listings
        partners.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-12">
        <div className="card w-full lg:w-80 bg-base-100 shadow-xl mx-auto">
          <figure>
            <img
              src="https://i.ibb.co/T2PGYWj/luxury06.jpg"
              alt="Shoes"
              className=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Just the Cars You Want</h2>
            <p>
              AutoTempest supports extensive search filtering for attributes
              from fuel type to interior color. Cast your net locally or across
              the country.
            </p>
          </div>
        </div>
        <div className="card  w-full lg:w-80 bg-base-100 shadow-xl mx-auto">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/s2V07hh/about03.webp"
              alt="Shoes"
              className=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Search on Any Device</h2>
            <p>
              AutoTempest works well in your browser - on any device. This means
              you get the full power of AutoTempest on your phone, tablet,
              laptop or desktop.
            </p>
          </div>
        </div>
        <div className="card w-full lg:w-80 bg-base-100 shadow-xl mx-auto">
          <figure className="">
            <img
              src="https://i.ibb.co/dftnZTy/luxury07.jpg"
              alt="Shoes"
              className=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Browse Results</h2>
            <p>
              AutoTempest provides millions of listings from a variety of
              sources. Browse them by source, or all in a single list, with all
              the sorting options you'd expect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
