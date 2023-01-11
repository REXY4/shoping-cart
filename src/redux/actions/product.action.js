import { Product } from "../../config/api";


const getAllProduct = (skip, setLoading) => async (dispatch) =>{
   let data = !setLoading ? false :  true
    try{   
        await data && setLoading(true) 
        let skips =  !skip ? 0 : skip;
        const response = await Product.get(`/products?limit=${8}&skip=${skips}`);
        console.log(response.data)
        if(response.status === 200){
           await data && setLoading(false)
          return  dispatch({
                type : "ALL_PRODUCT",
                payload : response.data
            })  
        }    
    }catch(err){
        console.log(err);
    }
}

const getByCategory = (category, setLoading) => async (dispatch) =>{
    setLoading(true)
    try{   
        const response = await Product.get(`/products/category/${category}`);
        if(response.status === 200){
            setLoading(false)
           return dispatch({
                type : "ALL_PRODUCT",
                payload : response.data
            })  
        }else{
            setLoading(true)
        }    
    }catch(err){
        setLoading(false)
    }
}




export  {
    getAllProduct,
    getByCategory
}