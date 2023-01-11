import "../styles/pages/main.css";
import React,{useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import {connect} from "react-redux";
import ListCategories from "../components/categories/ListCategories";
import ListProduct from "../components/products/ListProducts";
import {getAllProduct, getByCategory} from "../redux/actions/product.action";
import { AddCart } from "../redux/actions/cart.action";

const Main = ({
    product,
    category,
    getAllProduct,
    getByCategory,
    AddCart,
    cart
}) =>{
    const [stateCategory, setStateCategory] = useState("all");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const handlePage = async() =>{
        let skip = page * 8;
        getAllProduct(skip, setLoading)
    }

    const handleCategory = async () =>{
        if(stateCategory === "all"){
            return handlePage()
        }
        getByCategory(stateCategory, setLoading)
    }

    return(
       <div className="main-pages"> 
       <Container>
            <ListCategories 
            handleCategory={handleCategory}
            category={category}
            stateCategory={stateCategory}
            setStateCategory={setStateCategory}
            />
            {
                 product && (
                <ListProduct addCart={AddCart} loading={loading} stateCategory={stateCategory} handlePage={handlePage} setPage={setPage} page={page} totalProduct={product.total} product={product.products}/>
            )
        }
       </Container>
       </div> 
    )
}

// 

const mapStateToProps = (state) => {
    return {
        product : state.product.product,
        category : state.category.category,
        cart : state.cart.cart
    }
}

export default connect(mapStateToProps,{getAllProduct, getByCategory, AddCart})(Main);