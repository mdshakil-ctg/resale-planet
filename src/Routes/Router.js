import Main from "../Layout/Main/Main";
import CatagoryDetails from "../Pages/Home/AllCatagories/CatagoryDetails/CatagoryDetails";
import Home from "../Pages/Home/Home/Home";

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
            element: <CatagoryDetails></CatagoryDetails>,
            loader: ({params})=>fetch(`http://localhost:5000/catagory/${params.id}`)
         }
      ]
   }
])