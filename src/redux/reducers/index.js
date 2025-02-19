import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";


const rootReducer = combineReducers({
    allProducts: productReducer, // Products list
    product: selectedProductReducer, // Single selected product
});

export default rootReducer;

