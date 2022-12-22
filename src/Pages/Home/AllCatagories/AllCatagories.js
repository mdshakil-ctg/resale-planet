import React from "react";
import Loader from "../../Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import CatagoryCard from "./CatagoryCard/CatagoryCard";

const AllCatagories = () => {
  const { data: allCatagory = [], isLoading } = useQuery({
    queryKey: ["allCatagory"],
    queryFn: () =>
      fetch("https://resale-planet-server.vercel.app/all-catagory").then((res) => res.json()),
  });

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center mt-12 lg:mt-20">
        Special Catagories Brand{" "}
      </h2>
      <p className="text-gray-500 text-center mt-4 mb-2 lg:mb-12 w-2/3 mx-auto lg:w-1/2">
        All Kinds of Luxury and Premium bundle for Todays pick. You have to pick
        your brand unless booked by anyone else.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 lg:mx-20 ">
        {allCatagory.map((catagory) => (
          <CatagoryCard
            key={catagory.catagory_id}
            catagory={catagory}
          ></CatagoryCard>
        ))}
      </div>
    </div>
  );
};

export default AllCatagories;
