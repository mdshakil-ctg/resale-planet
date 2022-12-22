import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/UserContext";
import { EyeIcon } from "@heroicons/react/24/solid";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { createUser, updateUser, loginWithGoogle } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState(true)

  const navigate = useNavigate();

  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const userInfo = {
          displayName: data.name,
          role: data.role,
        };
        updateUser(userInfo)
          .then((result) => saveUserData(data.name, data.email, data.role))
          .catch((err) => {
            console.log(err);
          });
        console.log(result);
        toast("user sign up succesfully");
      })
      .catch((err) => {
        setRegisterError(err.message);
      });
  };

  const saveUserData = (name, email, role) => {
    const user = { name, email, role };
    fetch("https://resale-planet-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetch(`https://resale-planet-server.vercel.app/jwt?email=${email}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.accessToken) {
              localStorage.setItem("token", data.accessToken);
              setToken(data.accessToken);
            }
          })
          .catch((err) => console.log(err));
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        const role = "Buyer";
        saveUserData(user?.displayName, user?.email, role);

        fetch(`https://resale-planet-server.vercel.app/jwt?email=${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.accessToken) {
              localStorage.setItem("token", data.accessToken);
              setToken(data.accessToken);
            }
          })
          .catch((err) => console.log(err));

        toast("User Sign Up Succesfull");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const eyeButton = e =>{
    setPassword(!password)
  }

  if(token){
    navigate('/')
  }

  return (
    <form
      className="my-12 flex flex-col justify-center items-center"
      onSubmit={handleSubmit(handleSignUp)}
    >
      <h1 className="text-4xl mb-5 font-extrabold">Register Now</h1>
      <p className="mb-5 text-gray-500">
              You have to register first to shop. There are
              huge amount of content here.
            </p>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          {...register("name", {
            required: "name is required",
            minLength: { value: 5, message: "mis length is 5 characters" },
          })}
          type="text"
          className="input input-bordered w-full max-w-xs focus:border-0 focus:input-error focus:bg-gray-100 focus:outline-offset-0 rounded-none"
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          {...register("email", {
            required: "email is required",
            minLength: { value: 10, message: "min length is 10 for email" },
          })}
          type="text"
          className="input input-bordered w-full max-w-xs focus:border-0 focus:input-error focus:bg-gray-100 focus:outline-offset-0 rounded-none"
        />
        {errors.email && <span className="text-red-500">Email Required</span>}
      </div>

      <div className="form-control w-full relative max-w-xs">
        <label className="label">
          <span className="label-text">Password</span>
          <button onClick={()=>eyeButton()} className="lebel-text absolute top-[48px] right-[10px]"><EyeIcon className="w-4 h-4 text-gray-600"></EyeIcon></button>
        </label>
        <input
          type={password ? "password" : "text"}
          {...register("password", {
            required: "password is required",
            minLength: { value: 8, message: "minumum 8 characters or longer" },
          })}
          className="input input-bordered w-full max-w-xs focus:border-0 focus:input-error focus:bg-gray-100 focus:outline-offset-0 rounded-none"
        />

        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Select Role</span>
        </label>
        <select
          defaultValue={"buyer"}
          {...register("role", {})}
          className="select input-bordered w-full max-w-xs focus:border-0 focus:input-error focus:bg-gray-100 focus:outline-offset-0 rounded-none"
        >
          <option selected>Buyer</option>
          <option>Seller</option>
        </select>
        {errors.email && <span className="text-red-500">Email Required</span>}
      </div>
      <button type="submit" className="btn btn-primary w-full max-w-xs mt-10 mb-5">
        Create Account
      </button>
      <div className="form-control w-full max-w-xs">
        <p className="text-center text-sm">
          Already have an account?
          <Link to="/login" className=" ml-1 label-text-alt link link-hover font-bold">
            login now
          </Link>
        </p>
        <div className="divider max-w-xs text-xs ">OR</div>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-secondary btn-outline w-full max-w-xs"
        >
          Continue With Google
        </button>
      </div>
      {registerError && (
        <p className="text-xl text-red-700 my-5">{registerError}</p>
      )}

    </form>
  );
};

export default Register;
