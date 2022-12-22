import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import useSeller from "../../Hook/UseSeller";
import Loader from "../../Pages/Loader/Loader";

const SellerRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [isSeller, isLoading] = useSeller(user?.email);

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (user && isSeller) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default SellerRoute;
