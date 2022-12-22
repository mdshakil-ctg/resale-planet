import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";

const AllBuyer = () => {
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allDoctors"],
    queryFn: () =>
      fetch(`https://resale-planet-server.vercel.app/dashboard/all-buyer`).then((res) =>
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
  return (
    <div>
      <div className="overflow-x-auto hidden md:block">
        <table className="table w-full  ">
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 gap-10 mt-10 px-4 md:hidden">
        {users.map((user, i) => (
          <div
            key={user._id}
            className="card text-center bg-base-100 shadow-xl"
          >
            <div className="p-5 mx-auto overflow-hidden">
              <h2 className="font-semibold">User Name</h2>
              <h2 className="text-gray-500 overflow-hidden">{user.name}</h2>
              <p className="text-xs overflow-hidden">Email : {user.email}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => deleteUser(user._id)}
                  className="btn btn-warning btn-xs mt-3 mx-auto"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AllBuyer;
