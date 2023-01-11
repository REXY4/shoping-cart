import { combineReducers } from 'redux';
import cartReducers from './cart.reducer';
import categoryReducers from './category.reducers';
import productReducers from './product.reducer';

const reducers = combineReducers({
    product : productReducers,
    category : categoryReducers,
    cart : cartReducers,
});

export default reducers;