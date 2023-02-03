import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import "../Dashboard/CheckoutForm.css";
import React, { useState } from "react";
const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};
const CheckoutForm = ({ payment }) => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "https://decorative-lights-server.vercel.app/payment",
          {
            amount: 1000,
            id,
          }
        );

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <h3
            style={{
              color: "#A07047",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            Please {payment.name} pay for {payment.title}
          </h3>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button className="pay">Pay {payment.price}</button>
        </form>
      ) : (
        <div>
          <h4>
            Congratulations!{" "}
            <span
              style={{
                color: "#A07047",
                fontWeight: "bold",
                marginTop: "50px",
              }}
            >
              {payment.name}
            </span>{" "}
            payment successfull
          </h4>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
