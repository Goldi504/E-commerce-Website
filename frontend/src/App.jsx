import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import PlaceOrder from "./pages/PlaceOrder";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import ShopContextProvider from "./contexts/ShopContext";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import SearchBar from "./components/searchBar";
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  return (
    
   <ShopContextProvider>
      <Navbar/>
      <SearchBar />
       <ToastContainer/>
     
       <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
           <Route path="/cart" element={<Cart/>} />
          <Route path="/place-order" element={<PlaceOrder />} />
        </Routes>
        <Footer/>
      </div>
    </ShopContextProvider>
     
  );
};
export default App;
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Collection from "./pages/Collection";
// import About from "./pages/About";
// import PlaceOrder from "./pages/PlaceOrder";
// import Contact from "./pages/Contact";
// import Product from "./pages/Product";

// import {Navbar} from "./components/Navbar";

// // Optional 404 page
// const NotFound = () => <h1 className="text-center mt-10 text-2xl text-red-600">404 - Page Not Found</h1>;

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/collection' element={<Collection />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/contact' element={<Contact />} />
//           <Route path='/product/:productId' element={<Product />} />
//           <Route path='/place-order' element={<PlaceOrder />} />

//           {/* 404 route */}
//           <Route path='*' element={<NotFound />} />
//         </Routes>
//       </div>
//     </>
//   );
// };

// export default App;
