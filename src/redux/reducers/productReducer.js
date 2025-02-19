import { ActionTypes } from "../contants/action-type";

const initialState = {
    products: [], // Stores all products
    selectedProduct: {}, // Stores a single selected product
};

// Reducer function
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload }; // Sets all products

        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, selectedProduct: payload }; // Sets selected product

        default:
            return state; // Return unchanged state for unknown actions
    }
};
export const selectedProductReducer = (state={},{type,payload}) => {
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
            return{...state,...payload}
        default:
            return state;
    }
}