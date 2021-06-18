import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection } from '../../components';
import About from '../../components/About/About'
import Products from '../../components/Products/Products'
import Story from '../../components/Story/Story'


function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <About {...homeObjTwo}/>
      <Products {...homeObjThree} />
      <Story {...homeObjFour} />
      
    </>
  );
}

export default Home;
