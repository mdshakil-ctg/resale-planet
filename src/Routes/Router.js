import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Main from "../Layout/Main/Main";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import BuyerDashboard from "../Pages/Dashboard/BuyerDashboard";
import CatagoryDetails from "../Pages/Home/AllCatagories/CatagoryDetails/CatagoryDetails";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellerRoute from "./SellerRoute/SellerRoute";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
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
      children: [
         {
            path: 'dashboard/buyer-dashboard',
            element: <BuyerDashboard></BuyerDashboard>
         },
         {
            path: 'dashboard/add-product',
            element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
         },

      ]
   }
])