import React from 'react'
import { homeObjOne } from './Data'
import { AboutSection } from '../../components'

const Home = () => {
    return (
        <>
          <AboutSection { ...homeObjOne }/>  
        </>
    )
}

export default Home

