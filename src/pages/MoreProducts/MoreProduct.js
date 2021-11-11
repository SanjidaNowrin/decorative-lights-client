import React from "react";
import "./MoreProduct.css";
import { Link } from "react-router-dom";
const MoreProduct = ({ moreproduct }) => {
  const { title, img, desc, _id, price } = moreproduct;
  return (
    <div className="mt-5 col-lg-4 col-sm-6 gx-5">
      <div
        className="p-3 mb-5 border-0 rounded shadow cardHover card w-100"
        style={{ background: "#EFEFEF" }}
      >
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3
            className="mb-3 text-center card-title font-weight-bold"
            style={{ color: "#895E40" }}
          >
            {title}
          </h3>
          <p className="text-center card-text">{desc}</p>
          <h3
            className="mb-3 text-center card-text"
            style={{ color: "#895E40" }}
          >
            {price}
          </h3>

          <Link to={`/details/${_id}`}>
            <button className="container details-btn">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MoreProduct;
