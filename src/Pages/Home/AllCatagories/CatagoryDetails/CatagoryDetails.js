
import { useLoaderData } from "react-router-dom";
import ShowCatagory from "./ShowCatagory";

const CatagoryDetails = () => {
   
  const catagories = useLoaderData();
 
  return (
    <div>
      <h1>this is catagory details page for catagory 1</h1>
      {
         catagories.map((catagory,i)=> <ShowCatagory
         catagory={catagory}
         key={i}
         ></ShowCatagory>)
      }
    </div>
  );
};

export default CatagoryDetails;
