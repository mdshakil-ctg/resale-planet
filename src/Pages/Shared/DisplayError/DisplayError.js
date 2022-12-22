import React, { useContext } from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import "./DisplayError.css";

const DisplayError = () => {
  const { error } = useContext(AuthContext);
  const routerError = useRouteError();
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then((result) => {
        navigate("/");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="main flex flex-col italic items-center">
      <p className="text-3xl text-center text-gray-500 font-semibold mt-10">
        Oops Something went wrong....
      </p>
      <p className="text-yellow-500  text-3xl text center">{error}</p>

      <p className="text-gray-500 text-2xl my-2">
        {routerError?.statusText || routerError?.message}
      </p>
      <div className="flex">
        <Link to="/">
          <button className="btn btn-warning mr-4">
            <span className="mr-1">
              <ArrowLongLeftIcon class="h-6 w-6 text-blue-500" />
            </span>{" "}
            Go To Home
          </button>
        </Link>
        <a href="/">
          <button
            onClick={handleLogout}
            className="btn btn-outline btn-warning"
          >
            Sign out
          </button>
        </a>
      </div>
    </div>
  );
};

export default DisplayError;
