import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/UserContext";
// import UseToken from "../../hook/UseToken";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { createUser, updateUser, loginWithGoogle } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();
  //   const [token] = UseToken(userEmail)

  //   if(token){
  //     navigate('/')
  //   }
  const handleSignUp = (data) => {
  
    createUser(data.email, data.password)
      .then((result) => {
        const userInfo = {
          displayName: data.name,
          role: data.role
        };
        updateUser(userInfo)
          .then((result) => {
            // console.log(result)
            saveUserData(data.name, data.email, data.role);
          })
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
    const user = { name, email , role};
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setUserEmail(email);
      })
      .catch((err) => console.log(err));
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
    .then(result => {
      const user = result.user;
      console.log(user)
      const role = 'Buyer'
      saveUserData(user?.displayName, user?.email, role)
      toast('Sign Up Succesfull')
    })
    .catch(err => console.log(err))
  };

  return (
    <form
      className="mt-24 flex flex-col justify-center items-center"
      onSubmit={handleSubmit(handleSignUp)}
    >
      <h1 className="text-4xl mb-5">Register</h1>

      {/* email field  */}
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
          className="input input-bordered w-full max-w-xs"
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
          className="input input-bordered w-full max-w-xs"
        />
        {errors.email && <span className="text-red-500">Email Required</span>}
      </div>
      {/* password field  */}
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          {...register("password", {
            required: "password is required",
            minLength: { value: 8, message: "minumum 8 characters or longer" },
          })}
          className="input input-bordered w-full max-w-xs"
        />
        {/* {errors.password && <span className="text-red-500">This field is required</span>} */}
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Select Role</span>
        </label>
        <select defaultValue={'buyer'}
        {...register("role", {
        })}
        className="select input-bordered w-full max-w-xs">
          <option selected>Buyer</option>
          <option>Seller</option>
        </select>
        {errors.email && <span className="text-red-500">Email Required</span>}
      </div>
      <button type="submit" className="btn btn-secondary w-full max-w-xs my-5">
        Create Account
      </button>
      <div className="form-control w-full max-w-xs">
        <p>
          Already have an account?
          <Link to="/login" className="text-secondary block text-center">
            login your account
          </Link>
        </p>
        <div className="divider max-w-xs ">OR</div>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-accent w-full max-w-xs"
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
