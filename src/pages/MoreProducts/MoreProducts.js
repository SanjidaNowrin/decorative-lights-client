import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import MoreProduct from "./MoreProduct";

const MoreProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://cryptic-forest-81698.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Header></Header>
      <div className="container mt-4">
        <h1 style={{ color: "#895E40" }} className="container text-center">
          All Products
        </h1>
        {products.length === 0 ? (
          <div className="py-5 my-5 text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <div className="row">
            {products.map((moreproduct) => (
              <MoreProduct
                moreproduct={moreproduct}
                key={moreproduct._id}
              ></MoreProduct>
            ))}
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MoreProducts;
