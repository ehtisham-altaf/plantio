import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/home";

import Signup from "./components/signup/signup";
import Shop from "./components/shop/shop";
import Footer from "./components/footer/footer";
import ProductDetail from "./components/productDetail/productDetail";
import { AnimatePresence } from "framer-motion";
import Cart from "./components/cart/cart";
import Navbar from "./components/navbar/navbar";
import AboutUs from "./components/about us/AboutUs";
import Faq from "./components/faqs/faq";
import Contact from "./components/contact/contact";
import NotFound from "./components/404/404";

function App() {
  
  return (
    <>
    <AnimatePresence>
      
      <BrowserRouter>
      <Navbar/>
        <Routes onUpdate={() => window.scrollTo(0, 0)}>
          <Route path="/" Component={Home} />
       
        
          <Route exact path="/sign-up" Component={Signup} />
          <Route exact onUpdate={() => window.scrollTo(0, 0)} path="/shop" Component={Shop} />
          <Route path="/shop/:category/:id" Component={ProductDetail} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about-us" Component={AboutUs} />
          <Route path="/contact" Component={Contact} />
          <Route path="/faqs" Component={Faq} />
          <Route path="*" Component={NotFound} />

        </Routes>
        <Footer />
      </BrowserRouter>
     
    </AnimatePresence>
    </>
  );
}

export default App;
