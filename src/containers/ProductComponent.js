import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products) || []; // ✅ Ensure default array

  // Handle case when products are not available
  if (!Array.isArray(products) || products.length === 0) {
    return <h2 className="ui red header" style={{ textAlign: "center", marginTop: "20px" }}>No Products Available</h2>;
  }

  return (
    <div className="ui grid container" style={{ marginTop: "20px" }}>
      {products.map((product) => {
        const { id, title, image, price, category } = product;

        return (
          <div className="four wide column" key={id}>
            <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
              <div
                className="ui link card"
                style={{
                  height: "420px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  transition: "0.3s ease-in-out",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                {/* Image Section */}
                <div
                  className="image"
                  style={{
                    height: "60%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f8f8f8",
                    padding: "10px",
                  }}
                >
                  <img
                    src={image}
                    alt={title}
                    style={{
                      maxHeight: "200px",
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>

                {/* Content Section. */}
                <div className="content" style={{ padding: "15px", textAlign: "center" }}>
                  <div
                    className="header"
                    style={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      color: "#333",
                    }}
                  >
                    {title}
                  </div>
                  <div className="meta" style={{ color: "gray", fontSize: "0.9rem", margin: "5px 0" }}>
                    {category}
                  </div>
                  <div className="meta price" style={{ color: "green", fontWeight: "bold", fontSize: "1.1rem" }}>
                    ${price}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductComponent;
