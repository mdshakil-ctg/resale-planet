import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import Loader from "../Loader/Loader";
import DisplayError from "../Shared/DisplayError/DisplayError";
import BuyerBookingCard from "./buyerBookingCard/BuyerBookingCard";

const BuyerDashboard = () => {
  const { user } = useContext(AuthContext);
  const { setError } = useContext(AuthContext);
  const [serverError, setServerError] = useState("");

  const { data: bookingData = [], isLoading } = useQuery({
    queryKey: ["bookingData", user?.email],
    queryFn: () =>
      fetch(`https://resale-planet-server.vercel.app/dashboard/myorder?email=${user?.email}`, {
        headers: { authorization: `bearer ${localStorage.getItem("token")}` },
      })
        .then((res) => res.json())
        .then((data) => {
          setError(data.errorMessage);
          setServerError(data.errorMessage);
          console.log(data);
          return data;
        })
        .catch((err) => console.log(err)),
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="p-5">
      <div className="w-full">
        {serverError && <DisplayError></DisplayError>}
      </div>
      {bookingData.length > 0 &&
        bookingData.map((booking, i) => (
          <BuyerBookingCard key={i} booking={booking}></BuyerBookingCard>
        ))}
    </div>
  );
};

export default BuyerDashboard;
