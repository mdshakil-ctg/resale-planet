import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import useAdmin from "../../Hook/UseAdmin";
import Loader from "../../Pages/Loader/Loader";

const AdminRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [isAdmin, isLoading] = useAdmin(user?.email);

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default AdminRoute;
