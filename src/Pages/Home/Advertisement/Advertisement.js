import React from "react";
import AdvertiseCard from "./AdvertiseCard";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Advertisement = () => {
  const [products, setProducts] = useState([]);

  const getApiData = async () => {
    try {
      const res = await axios.get("https://resale-planet-server.vercel.app/advertise");
      setProducts(res.data);
    } catch {}
  };

  console.log("advertise", products);

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="text-center my-16 lg:my-24">
      <h2 className="text-4xl font-semibold text-center  lg:mt-20">
        Features Items In Exellent Condition
      </h2>
      <p className="text-gray-500 text-center mt-4 mb-10 lg:mb-12 w-2/3 mx-auto lg:w-1/2 ">
        You should glad to know that all the sellers are verifyed and you can
        shop with peacefully.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 lg:mx-20">
        {products.length > 0 &&
          products?.map((product) => (
            <AdvertiseCard key={product._id} product={product}></AdvertiseCard>
          ))}
      </div>
    </div>
  );
};

export default Advertisement;
