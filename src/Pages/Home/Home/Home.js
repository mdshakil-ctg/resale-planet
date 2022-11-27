import React from 'react';
import About from '../About/About';
import Advertisement from '../Advertisement/Advertisement';
import AllCatagories from '../AllCatagories/AllCatagories';
import Carousel from '../Carousel/Carousel';
import Banner from './Banner/Banner';

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <AllCatagories></AllCatagories>
         <Advertisement></Advertisement>
         <About></About>
      </div>
   );
};

export default Home;