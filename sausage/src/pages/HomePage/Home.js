import React from 'react'
import { homeObjOne, homeObjTwo, homeObjThree } from './Data'
import { AboutSection } from '../../components'

const Home = () => {
    return (
        <>
       
          <AboutSection { ...homeObjOne }/>  
          <AboutSection { ...homeObjTwo }/>  
          <AboutSection { ...homeObjThree }/>  
        </>
    )
}

export default Home

