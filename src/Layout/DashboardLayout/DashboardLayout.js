import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import useAdmin from "../../Hook/UseAdmin";
import useSeller from "../../Hook/UseSeller";
import Navbar from "../../Pages/Shared/Navbar";
import Footer from "./../../Pages/Shared/Footer";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isSeller] = useSeller(user?.email);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="absolute top-32 left-[18px] md:left-[500px] text-black animate-bounce">
        <h1 className="text-3xl font-bold">Welcome to Dashboard</h1>
      </div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-56 bg-gray-300 text-base-content">
            {isSeller && (
              <>
                <li className="text-xl font-bold">
                  <Link to="dashboard/add-product">Add a Product</Link>
                </li>
                <li className="text-xl font-bold">
                  <Link to="dashboard/my-products">My Products</Link>
                </li>
              </>
            )}
            {!isSeller && !isAdmin && (
              <>
                <li className="text-xl font-bold">
                  <Link to="dashboard/buyer-dashboard">My Orders</Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li className="text-xl font-bold">
                  <Link to="dashboard/all-buyer">All Buyers</Link>
                </li>
                <li className="text-xl font-bold">
                  <Link to="dashboard/all-seller">All Sellers</Link>
                </li>
                <li className="text-xl font-bold">
                  <Link to="dashboard/reported-item">Reported Items</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
