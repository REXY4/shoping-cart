import React,{useEffect} from "react";
import {
  RouterProvider,
} from "react-router-dom";
import NavbarBasic from "./components/navbars/Navbar";
import router from './routes';
import { connect } from "react-redux";
import { getAllProduct } from "./redux/actions/product.action";
import {getAllCategory} from "./redux/actions/category.aciton";


function App({
  getAllProduct,
  getAllCategory,
  cart
}) {
  useEffect(()=>{
    getAllProduct();
    getAllCategory();
  },[])

  return (
    <div className="app">
        <NavbarBasic cart={cart && cart.cart}/>
        <RouterProvider router={router}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    product : state.product,
    cart : state.cart.cart
  }
}
export default connect(mapStateToProps,{getAllProduct,getAllCategory})(App);
