import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import ShowCatagory from "./ShowCatagory";

const CatagoryDetails = () => {
  const [modalData, setModalData] = useState(null);

  const catagories = useLoaderData();

  console.log(catagories);

  return (
    <div>
      <h2 className="text-4xl font-semibold text-center mt-12 lg:mt-20">
        View Details About Products
      </h2>
      <p className="text-gray-500 text-center mt-4 mb-10 lg:mb-0 w-2/3 mx-auto lg:w-1/2 ">
        You should glad to know that all the sellers are verifyed and you can
        shop with peacefully.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {catagories?.length > 0 &&
          catagories.map((catagory, i) => (
            <ShowCatagory
              catagory={catagory}
              key={i}
              setModalData={setModalData}
            ></ShowCatagory>
          ))}
      </div>

      {modalData && (
        <BookingModal
          modalData={modalData}
          setModalData={setModalData}
        ></BookingModal>
      )}
    </div>
  );
};

export default CatagoryDetails;
