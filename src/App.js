import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import { useState,useEffect } from 'react';
import {updatedProducts ,fetchInfo} from './data/Data';
import Header from './components/Header';
import { ShopContextProvider } from './context/shop-context';
import Cart from './components/Cart';
import Product from './pages/Product';
import Menu from './components/Menu';

function App() {

 const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    fetchInfo().then(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className='w-full text-center'>Loading...</div>;
  }
  else{

  }


  return (
    <ShopContextProvider>
      <BrowserRouter>
      <Header/>
      <Cart/>
      <Menu/>
      <Routes> 
          <Route index element={<Home />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        
      </Routes>
    </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;

