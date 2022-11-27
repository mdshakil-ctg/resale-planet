
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import ShowCatagory from "./ShowCatagory";

const CatagoryDetails = () => {
  const [modalData, setModalData] = useState(null)
   
  const catagories = useLoaderData();
  
  console.log(catagories)
 
  return (
    <div>
      <h1>this is catagory details page for catagory 1</h1>
      { catagories?.length >0 &&
         catagories.map((catagory,i)=> <ShowCatagory
         catagory={catagory}
         key={i}
         setModalData={setModalData}
         ></ShowCatagory>)
      }
      
      {
        modalData &&
        <BookingModal
        modalData={modalData}
        setModalData={setModalData}
        ></BookingModal>
      
      }
    </div>
  );
};

export default CatagoryDetails;
