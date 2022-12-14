import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/UserContext";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const { data: products = [], refetch } = useQuery({
    queryKey: ["allDoctors", user.email],
    queryFn: () =>
      fetch(
        `https://resale-planet-server.vercel.app/dashboard/my-product?email=${user.email}`
      ).then((res) => res.json()),
  });

  const handleDelete = (id) => {
    fetch(`https://resale-planet-server.vercel.app/dashboard/my-product/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result.deletedCount > 0) {
          toast.success(`Product ${data.name.name} Removed Succesfully`);
          refetch();
        }
      })
      .catch((err) => console.error(err));
  };

  const handleAdvertise = (id) => {
    fetch(`https://resale-planet-server.vercel.app/dashboard/addvertise/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
        email: user?.email,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.errorMessage) {
          return toast(result.errorMessage);
        }
        if (result.acknowledged) {
          return toast("Product added to the homepage for advertized");
        } else {
          return toast(result.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mt-20">
      {products.length <= 0 && (
        <h2 className="text-center text-2xl my-12">
          You Havn't Added Any Product Yet.
        </h2>
      )}
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Model Name</th>
                <th>Phone</th>
                <th>Buyer Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, i) => (
                <tr key={i} className="hover">
                  <th>
                    <img
                      className="w-20 rounded-md"
                      src={product.img_url}
                      alt=""
                    />
                  </th>
                  <td>
                    {product.name}
                    {product?.purchased ? (
                      <p className="text-orange-500">Sold</p>
                    ) : (
                      <p classname="text-red-900">Available</p>
                    )}
                  </td>
                  <td>{product.phone}</td>
                  <td>{product.location}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="btn btn-xs btn-warning mr-3"
                    >
                      Delete Product
                    </button>
                    <button
                      onClick={() => handleAdvertise(product._id)}
                      className="btn btn-xs btn-warning"
                    >
                      Advertise
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
