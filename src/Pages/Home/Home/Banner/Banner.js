import React from "react";
import BannerContent from "./BannerContent";

const Banner = () => {
  const bannerData = [
    {
      image: "https://i.ibb.co/Yyp6GQf/catagory-sports.jpg",
      prev: 6,
      id: 1,
      next: 2,
    },
    {
      image: "https://i.ibb.co/T2PGYWj/luxury06.jpg",
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: "https://i.ibb.co/xG8wTBV/luxury08.jpg",
      prev: 2,
      id: 3,
      next: 4,
    },
    {
      image: "https://i.ibb.co/nkBp2jp/luxury12.jpg",
      prev: 3,
      id: 4,
      next: 5,
    },
    {
      image: "https://i.ibb.co/PmqBnww/sports08.jpg",
      prev: 4,
      id: 5,
      next: 6,
    },
    {
      image: "https://i.ibb.co/GsvYyJv/sports07.jpg",
      prev: 5,
      id: 6,
      next: 1,
    },
  ];

  return (
    <div className="carousel w-full">
      {bannerData.map((content) => (
        <BannerContent key={content.id} content={content}></BannerContent>
      ))}
    </div>
  );
};

export default Banner;
