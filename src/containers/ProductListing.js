import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productAction";
import axios from "axios";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products); // Correct state usage
  const dispatch = useDispatch(); // Fix: Use `useDispatch()` properly

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(response.data)); // Dispatching the action to Redux store
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [dispatch]); // Include dispatch in the dependency array

  // console.log("Products: ", products);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
