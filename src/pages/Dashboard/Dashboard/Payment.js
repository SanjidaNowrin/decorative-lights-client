import React from "react";
import payment from "../../../assets/images/payment.png";
const Payment = () => {
  return (
    <div className="container">
      <h1 style={{ color: "#A07047", textAlign: "center" }}>
        Payment System Coming Soon
      </h1>
      <img src={payment} className="img-fluid" height="100px" alt="" />
    </div>
  );
};

export default Payment;
