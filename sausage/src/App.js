import React from 'react'
import GlobalStyle from './globalStyles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import MainSlider from './components/MainSlider/MainSlider'
import ProductCarousel from './components/ProductCarousel/ProductCarousel'
import image1 from "../src/images/onions.jpg"
import image2 from "../src/images/image0.jpeg"
import image3 from "../src/images/quality.png"




function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <MainSlider 
      images={[image1,image2, image3]}/>
      <ProductCarousel />
      <Switch>
        <Route path="/" exact component={Home} />

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
