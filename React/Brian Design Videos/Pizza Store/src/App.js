import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Products from "./components/Products";
import { productData,productDataTwo } from './components/Products/data';
import { Feature } from "./components/Feature";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading = 'Choose Your Favorite Pizza' data = {productData}/>

      <Products heading = 'Choose Your Favorite Desert' data = {productDataTwo}/>
      <Feature/>
      <Footer/>
    
    </Router>
  );
}

export default App;
