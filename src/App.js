import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import React,{useState}  from "react";
import { GlobalStyle } from "./GlobalStyle";
import Cart from "./componensts/cart/Cart";
import Home from "./componensts/Home/Home";
import Pizza from "./componensts/Pizzas/Pizza";
import Footer from "./componensts/Footer/Footer"
import Navbar from "./componensts/Navbar/Navbar";
import Sidebar from "./componensts/Sidebar/Sidebar";
import store from "./app/store";
import { Provider } from "react-redux";

function App() {

  const [isOpen,setIsOpen] =useState(false);

  const toggle =()=>{
    setIsOpen(!isOpen);
  }
  
  return (
    <div className="App">
    <Provider store={store}>
    <Router>
    <GlobalStyle/>
    <Navbar toggle={toggle}/> 
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/cart" element={<Cart/>}/>
    <Route exact path="/pizzas" element={<Pizza/>}/>
    </Routes>
    <Footer/>
    </Router>
    </Provider>
    </div>
  );
}

export default App;
