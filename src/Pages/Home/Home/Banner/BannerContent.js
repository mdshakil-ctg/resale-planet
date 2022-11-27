import React from 'react';
import '../Banner.css'

const BannerContent = ({content}) => {
   const {image, id, prev, next} = content;
   return (
      <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className='carousel-img'>
          <img src={image} alt=""/>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-8 lg:left-24 top-1/4">
          <h1 className='text-xl lg:text-6xl font-bold text-white'>
              Affordable <br />
              Price for Car <br />
              Servicing
          </h1>
      </div>
      <div className="  absolute flex justify-end transform -translate-y-1/2 lg:w-2/5 left-8 lg:left-24 top-1/2">
          <p className='text-xs lg:text-2xl  text-gray-300'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-8 lg:left-24 lg:top-3/4 top-48">
          <button className="btn btn-sm lg:btn-md btn-warning mr-3 lg:mr-5">Warning</button>
          <button className="btn btn-sm lg:btn-md btn-outline btn-warning">Warning</button>
      </div>
      <div className="hidden absolute lg:flex justify-between transform -translate-y-1/2 w-full top-1/2">
          <a href={`#slide${prev}`} className="btn btn-circle ml-5">❮</a>
          <a href={`#slide${next}`} className="btn btn-circle mr-5">❯</a>
      </div>
  </div>
   );
};

export default BannerContent;