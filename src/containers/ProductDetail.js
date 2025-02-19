import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productAction";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();
  const productFromRedux = useSelector((state) => state.product.selectedProduct) || {};
  
  // Local state to store product details after fetching
  const [product, setProduct] = useState(productFromRedux);

  // Fetch product details
  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      console.log("Fetched Product:", response.data);
      
      setProduct(response.data); // Store product in local state
      dispatch(selectedProduct(response.data)); // Store in Redux as well
    } catch (error) {
      console.error("Error fetching product:", error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    if (productId) fetchProductDetail();
  }, [productId]);

  return (
    <div className="ui container" style={{ marginTop: "20px" }}>
      {product && Object.keys(product).length > 0 ? (
        <div className="ui stackable grid">
          <div className="ui row">
            {/* Product Image */}
            <div className="six wide column">
              <img
                src={product.image || "https://via.placeholder.com/400"}
                alt={product.title || "Product Not Available"}
                className="ui fluid image"
                style={{ maxHeight: "400px", objectFit: "contain" }}
              />
            </div>

            {/* Product Details */}
            <div className="ten wide column">
              <h1 className="ui header">{product.title || "Product Not Available"}</h1>
              <h3 className="ui grey header">${product.price || "N/A"}</h3>
              <h4 className="ui blue header">Category: {product.category || "N/A"}</h4>
              <p>{product.description || "No description available"}</p>

              {/* Buttons */}
              <div className="ui labeled button">
                <button className="ui primary button">
                  <i className="cart icon"></i> Add to Cart
                </button>
                <button className="ui green button">
                  <i className="dollar sign icon"></i> Buy Now
                </button>
              </div>

              {/* Back to Home Button */}
              <button className="ui button" onClick={() => navigate("/")}>
                <i className="arrow left icon"></i> Back to Home
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="ui red header">Fetching Product Details...</h2>
      )}
    </div>
  );
};

export default ProductDetails;
