import Main from "../Layout/Main/Main";
import CatagoryDetails from "../Pages/Home/AllCatagories/CatagoryDetails/CatagoryDetails";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
         }
      ]
   }
])