import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const PUBLIC_KEY =
  "pk_test_51KIFUsCIxOl74wHrHWJZSZg4rV4vT6odatJKvOA4OYoRSHv9GQ76a9kOYghUUWriPrQJ7dE3sHBc1VpcVedigUz200s4ntulHo";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Payment = () => {
  const { productId } = useParams();
  const [payment, setPayment] = useState({});
  useEffect(() => {
    fetch(`https://decorative-lights-server.vercel.app/payments/${productId}`)
      .then((res) => res.json())
      .then((data) => setPayment(data));
  }, [productId]);
  return (
    <div className="container">
      {payment?.price && (
        <Elements stripe={stripeTestPromise}>
          <CheckoutForm payment={payment}></CheckoutForm>
        </Elements>
      )}
    </div>
  );
};

export default Payment;
