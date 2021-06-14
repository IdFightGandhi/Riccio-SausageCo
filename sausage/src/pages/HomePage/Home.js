import React from 'react'
import { homeObjOne, homeObjTwo, homeObjThree } from './Data'
import { AboutSection } from '../../components'
import  AboutPage  from '../AboutUs/About'
import ProductsPage from '../Products/ProductsPage'

const Home = () => {
    return (
        <>
       
          <AboutSection { ...homeObjOne }/>  
          <AboutPage { ...homeObjTwo }/>  
          <ProductsPage { ...homeObjThree }/>  
        </>
    )
}

export default Home

