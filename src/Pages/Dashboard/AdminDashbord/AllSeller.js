import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/UserContext";
import Loader from "../../Loader/Loader";
import DisplayError from "../../Shared/DisplayError/DisplayError";

const AllSeller = () => {
  const { user, setError } = useContext(AuthContext);
  const [displayError, setDisplayError] = useState("");

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allseller"],
    queryFn: () =>
      fetch(`https://resale-planet-server.vercel.app/dashboard/all-seller`).then((res) =>
        res.json()
      ),
  });

  const deleteUser = (id) => {
    if (window.confirm("Are You sure to delete?")) {
      fetch(`https://resale-planet-server.vercel.app/user/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast("User Deleted Succesfully");
            refetch();
          }
        });
    }
  };

  const handleVerify = (id) => {
    fetch(`https://resale-planet-server.vercel.app/user/verify/${id}`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("token")}`,
        email: user?.email,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.errorMessage) {
          setDisplayError(result.errorMessage);
          setError(result.errorMessage);
        }
        if (result.modifiedCount > 0) {
          toast("User is verified");
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };

  isLoading && <Loader></Loader>;
  displayError && <DisplayError></DisplayError>;

  return (
    <div>
      {displayError && (
        <p className="text-red-500 text-2xl my-8 text-center">
          {displayError} to verify an user.
        </p>
      )}
      <div className="overflow-x-auto hidden md:block">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <tr key={user._id} className="hover">
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="btn btn-warning btn-sm"
                  >
                    Delete
                  </button>
                  {user.status !== "verifyed" && (
                    <button
                      onClick={() => handleVerify(user._id)}
                      className="btn btn-warning btn-sm ml-3"
                    >
                      Verify
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 gap-10 my-10 px-4 md:hidden">
        {users.map((user, i) => (
          <div
            key={user._id}
            className="card text-center bg-base-100 shadow-xl"
          >
            <div className="p-5 mx-auto">
              <h2 className="font-semibold overflow-hidden">User Name</h2>
              <h2 className="text-gray-500 overflow-hidden">{user.name}</h2>
              <p className="text-xs overflow-hidden">Email : {user.email}</p>
              <div className="">
                <button
                  onClick={() => deleteUser(user._id)}
                  className="btn btn-warning btn-xs mt-3 mx-auto"
                >
                  Delete
                </button>
                {user.status !== "verifyed" && (
                  <button
                    onClick={() => handleVerify(user._id)}
                    className="btn btn-outline btn-warning btn-xs ml-2 mt-3 mx-auto"
                  >
                    Verify
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSeller;
