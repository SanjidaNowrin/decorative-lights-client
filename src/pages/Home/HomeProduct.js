import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import MoreProduct from "./../MoreProducts/MoreProduct";

const HomeProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container mt-4">
      <h1 style={{ color: "#895E40" }} className="container text-center">
        Our Products
      </h1>
      {products.length === 0 ? (
        <div className="py-5 my-5 text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div className="row">
          {products.slice(0, 6).map((moreproduct) => (
            <MoreProduct
              moreproduct={moreproduct}
              key={moreproduct._id}
            ></MoreProduct>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeProduct;
