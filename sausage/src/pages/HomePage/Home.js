import React from 'react'
import { homeObjOne, homeObjTwo, homeObjThree } from './Data'
import { AboutSection } from '../../components'
import  AboutPage  from '../AboutUs/About'

const Home = () => {
    return (
        <>
       
          <AboutSection { ...homeObjOne }/>  
          <AboutPage { ...homeObjTwo }/>  
          <AboutSection { ...homeObjThree }/>  
        </>
    )
}

export default Home

