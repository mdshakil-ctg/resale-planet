import React from 'react';
import About from '../About/About';
import AllCatagories from '../AllCatagories/AllCatagories';
import Carousel from '../Carousel/Carousel';

const Home = () => {
   return (
      <div>
         <Carousel></Carousel>
         <AllCatagories></AllCatagories>
         <About></About>
      </div>
   );
};

export default Home;