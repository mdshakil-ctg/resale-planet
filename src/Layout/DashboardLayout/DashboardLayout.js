import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import useAdmin from '../../Hook/UseAdmin';
import useSeller from '../../Hook/UseSeller';
import Navbar from '../../Pages/Shared/Navbar';

const DashboardLayout = () => {
  const {user} = useContext(AuthContext)
  const [isSeller] = useSeller(user?.email)
  const [isAdmin] = useAdmin(user?.email)
   return (
      <div>
         <Navbar></Navbar>
         <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <Outlet></Outlet>     
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
    
     
      {/* {
        isAdmin && <>
        <li className='text-xl font-bold'><Link to='/dashboard/users'>Users</Link></li>
        <li className='text-xl font-bold'><Link to='/dashboard/add-doctor'>Add A Doctor</Link></li>
        <li className='text-xl font-bold'><Link to='/dashboard/all-doctors'>Manage Doctors</Link></li>
        </>
      } */}
      {
         isSeller && <>
         <li className='text-xl font-bold'><Link to='dashboard/add-product'>Add a Product</Link></li>
         <li className='text-xl font-bold'><Link to='dashboard/my-products'>My Products</Link></li>
         </>
      }
      {
        (!isSeller && !isAdmin) && <li className='text-xl font-bold'><Link to='dashboard/buyer-dashboard'>My Orders</Link></li>
      }
      {
        isAdmin && <>
         <li className='text-xl font-bold'><Link to='dashboard/all-buyer'>All Buyers</Link></li>
         <li className='text-xl font-bold'><Link to='dashboard/all-seller'>All Sellers</Link></li>
        </>
      }

    </ul>
  
  </div>
</div>
      </div>
   );
};

export default DashboardLayout;