import React from "react";
import "../Banner.css";

const BannerContent = ({ content }) => {
  const { image, id, prev, next } = content;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} alt="" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-8 md:left-24 top-1/4">
        <h1 className="text-xl md:text-6xl font-bold text-white">
          Luxury <br />
          Collection For Car <br />
          Shopping
        </h1>
      </div>
      <div className="  absolute flex justify-end transform -translate-y-1/2 w-3/5 md:w-2/5 left-8 md:left-24 top-36 md:top-72 lg:top-1/2">
        <p className="text-xs md:text-sm lg:text-2xl  text-gray-300">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-8 md:left-24 top-52 md:top-3/4 ">
        <button className="btn btn-sm lg:btn-md btn-warning mr-3 lg:mr-5">
          Read More
        </button>
        <button className="btn btn-sm lg:btn-md btn-outline btn-warning">
          Contact
        </button>
      </div>
      <div className="hidden absolute md:flex justify-between transform -translate-y-1/2 w-full top-1/2">
        <a
          href={`#slide${prev}`}
          className="btn btn-circle glass text-yellow-500 ml-5"
        >
          ❮
        </a>
        <a
          href={`#slide${next}`}
          className="btn btn-circle glass text-yellow-500 mr-5"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerContent;
