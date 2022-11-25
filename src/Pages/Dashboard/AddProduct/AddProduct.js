import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import Loader from "../../Loader/Loader";

const AddProduct = () => {
  const [loading, setLoading] = useState(true);
   const {user} = useContext(AuthContext)
 

   const date = new Date()
  const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  const current_date =date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear() ;
  const bookingDate = time + " " + current_date;

   
   // const navigate = useNavigate()
   const key = process.env.REACT_APP_imgbb_key;
//   const { data: specialties = [] } = useQuery({
//     queryKey: ["specialty"],
//     queryFn: async () => {
//       const res = await fetch("http://localhost:5000/appointment-specialty");
//       const data = await res.json();
//       return data;
//     },
//   });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleAddProduct = (data) => {
   const {name, price, specialty, phone ,location, description, newPrice, used_duration, catagory} = data

   //  console.log(data.photo[0]);
   const image = data.photo[0]
   const formData = new FormData();
   formData.append('image', image)
   const url = `https://api.imgbb.com/1/upload?key=${key}`
   setLoading(false)
   fetch(url,{
      method:'POST',
      body: formData
   })
   .then(res=> res.json())
   .then(result=> {
     
      if(result.success){
         const postData = {
            email: user.email,
            seller_name: user.displayName,
            name,
            price,
            img_url: result.data.url,
            specialty,
            phone,
            location,
            description,
            newPrice,
            used_duration,
            catagory_id: catagory,
            post_time: bookingDate 
         };
         fetch('http://localhost:5000/dashboard/add-product',{
            method: 'POST',
            headers:{
               'content-type': 'application/json',
               authorization: `bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(postData)
         }).then(res=>res.json())
         .then(result => {
            console.log(result)
            if(result.acknowledged){
               toast.success('Product has to be added successfully')
               setLoading(true);
               // navigate('/dashboard/all-doctors')

            }
         })
      }
   })


  };
  if(!loading){
    return <Loader></Loader>
  }
  return (
    <div>
      <form
        className="mt-24 flex flex-col justify-center items-center"
        onSubmit={handleSubmit(handleAddProduct)}
      >
        <h1 className="text-4xl mb-5">Add A New Product</h1>

        
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Model Name</span>
          </label>
          <input
            {...register("name", {
              required: "name is required",
            })}
            type="text"
            className="input input-bordered w-full max-w-xs"
          />
          {errors?.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            {...register("price", {
              required: "Price is required",
            })}
            type="text"
            className="input input-bordered w-full max-w-xs"
          />
          {errors?.price && (
            <span className="text-red-500">{errors.price.message}</span>
          )}
        </div>

        
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Condition</span>
          </label>
          <select
            {...register("specialty", {
              required: "specialty is required",
            })}
            
            className="select select-accent w-full max-w-xs"
          >
            <option selected>Excellent</option>
            <option>Good</option>
            <option>Fair</option>
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Catagory</span>
          </label>
          <select
            {...register("catagory", {
              required: "specialty is required",
            })}
            className="select select-accent w-full max-w-xs"
          >
            <option selected>luxury</option>
            <option>sports</option>
            <option>electric</option>
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input
            {...register("phone", {
              required: "Price is required",
            })}
            type="text"
            className="input input-bordered w-full max-w-xs"
          />
          {errors?.phone && (
            <span className="text-red-500">{errors.phone.message}</span>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            {...register("location", {
              required: "Price is required",
            })}
            type="text"
            className="input input-bordered w-full max-w-xs"
          />
          {errors?.location && (
            <span className="text-red-500">{errors.location.message}</span>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            {...register("description", {
              required: "Price is required",
            })}
            type="text"
            className="input input-bordered w-full max-w-xs"
          />
          {errors?.description && (
            <span className="text-red-500">{errors.description.message}</span>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">New Price</span>
          </label>
          <input
            {...register("newPrice", {
              required: "Price is required",
            })}
            type="text"
            className="input input-bordered w-full max-w-xs"
          />
          {errors?.newPrice && (
            <span className="text-red-500">{errors.newPrice.message}</span>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Month Of Used</span>
          </label>
          <input
            {...register("used_duration", {
              required: "Price is required",
            })}
            type="text"
            className="input input-bordered w-full max-w-xs"
          />
          {errors?.yearPurchase && (
            <span className="text-red-500">{errors.yearPurchase.message}</span>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            {...register("photo", {
              required: "photo is required",
            })}
            type="file"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <button
          type="submit"
          className="btn btn-secondary w-full max-w-xs my-5"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
