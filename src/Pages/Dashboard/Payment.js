import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_PK);

const Payment = () => {
  const booking = useLoaderData();
  console.log(booking);
  return (
    <div className="flex justify-center items-center h-[500px] p-10">
      <div>
      <h1 className="text-3xl text-center lg:text-start">This is payment route for <span>{booking.carModel}</span></h1>
      <div className="lg:w-96 my-10">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
    </div>
  );
};

export default Payment;
