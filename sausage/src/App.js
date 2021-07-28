import React from 'react'
import GlobalStyle from './globalStyles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import MainSlider from './components/MainSlider/MainSlider'
import ProductCarousel from './components/ProductCarousel/ProductCarousel'




function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <MainSlider />
      <ProductCarousel />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
