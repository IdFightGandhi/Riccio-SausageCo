import React from 'react'
import { homeObjThree, homeObjTwo } from './Data'
import { AboutSection } from '../../components'

const Home = () => {
    return (
        <>
        
          <AboutSection { ...homeObjTwo }/>  
          <AboutSection { ...homeObjThree}/>  

        </>
    )
}

export default Home

