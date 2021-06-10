import React from 'react'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'
import { AboutSection } from '../../components'

const Home = () => {
    return (
        <>
          <AboutSection { ...homeObjOne }/>  
          <AboutSection { ...homeObjTwo }/>  
          <AboutSection { ...homeObjThree }/>  
          <AboutSection { ...homeObjFour}/>  
        </>
    )
}

export default Home

