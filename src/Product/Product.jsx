import React from "react";
import "./Product.css";
import productData from "./productData";
import ProductCard from "../ProductCard/ProductCard";

const Product = () => {
  const productTypes = ["Apparels", "Accessories", "Bestsellers", "50% Off"];
  return (
    <div
      className="product-page"
    >
      <h2 className="product-section-heading">New Products</h2>
      <div className="products-section">
        <div>
          <ul>
            {productTypes?.map((item) => {
              return <p className={item === "Accessories" ? "active-section" : ''}>{item}</p>;
            })}
          </ul>
        </div>
       <div className="product-cards-section">

        {
          productData?.map(item => {
            return <ProductCard productDetails={item}/>
          })
        }
       {/* <ProductCard />
       <ProductCard />
       <ProductCard />
       <ProductCard />
       <ProductCard /> */}
       </div>
      </div>
    </div>
  );
};

export default Product;
