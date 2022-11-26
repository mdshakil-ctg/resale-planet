import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Main from "../Layout/Main/Main";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import BuyerDashboard from "../Pages/Dashboard/BuyerDashboard";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../Pages/Dashboard/Payment";
import CatagoryDetails from "../Pages/Home/AllCatagories/CatagoryDetails/CatagoryDetails";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DisplayError from "../Pages/Shared/DisplayError/DisplayError";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellerRoute from "./SellerRoute/SellerRoute";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      errorElement: <DisplayError></DisplayError>,
      children: [
         {
            path:'/',
            element:<Home></Home>
         },
         {
            path:'/catagory/:id',
            element: <PrivateRoute><CatagoryDetails></CatagoryDetails></PrivateRoute>,
            loader: ({params})=>fetch(`http://localhost:5000/catagory/${params.id}`)
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         },
         
      ]
   },
   {
      path:'/dashboard',
      element:<DashboardLayout></DashboardLayout>,
      errorElement: <DisplayError></DisplayError>,
      children: [
         {
            path: 'dashboard/buyer-dashboard',
            element: <BuyerDashboard></BuyerDashboard>
         },
         {
            path: 'dashboard/add-product',
            element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
         },
         {
            path: 'dashboard/my-products',
            element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
         },
         {
            path: '/dashboard/payment/:id',
            element: <Payment></Payment>,
            loader: ({params})=>fetch(`http://localhost:5000/dashboard/payment/${params.id}`)
         }

      ]
   }
])