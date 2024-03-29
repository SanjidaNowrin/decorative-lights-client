import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "./../../../../hooks/useAuth";

const Cart = () => {
  const [control, setControl] = useState(false);
  const [reload, setReload] = useState(true);
  const { allContext } = useAuth();
  const [carts, setCarts] = useState([]);
  const { user } = allContext;
  const { email } = user;

  useEffect(() => {
    const query = `https://decorative-lights-ecommerce.onrender.com/singlecart?email=${email}`;
    fetch(query)
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, [email, reload]);
  // console.log(carts);
  //delete
  const handleDelete = (id) => {
    const confirmation = window.confirm("are you sure to delete?");
    if (confirmation) {
      fetch(`https://decorative-lights-ecommerce.onrender.com/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount === 1) {
            setControl(!control);
            setReload(!reload);
          }
        });
    }
    // console.log(id);
  };
  return (
    <div
      className="card mt-4 mb-3 border-0 container"
      style={{ backgroundColor: "#EFEFEF" }}
    >
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Buyer</th>
            <th>Status</th>
            <th>Cencel</th>
            <th>Payment</th>
          </tr>
        </thead>
        {carts?.map((cart, index) => (
          <tbody key={cart._id}>
            <tr>
              <td>{index + 1}</td>
              <td>
                <img
                  width="100%"
                  style={{
                    width: "6rem",
                    height: "6rem",
                    borderRadius: "50%",
                    margin: "auto",
                    marginTop: "15px",
                  }}
                  src={cart.img}
                  alt=""
                />
              </td>
              <td>{cart.title}</td>
              <td>{cart.price}</td>
              <td>{cart.name}</td>
              <td
                className="text-white btn p-2 mt-2 fw-bold"
                style={{ backgroundColor: "#895E40" }}
              >
                {cart.status}
              </td>
              <td>
                <button
                  onClick={() => handleDelete(cart._id)}
                  className="text-white btn p-2"
                  style={{ backgroundColor: "#895E40" }}
                >
                  <i className="fas fa-trash-alt "></i>
                </button>
              </td>
              <td>
                {cart.payment ? (
                  "Paid"
                ) : (
                  <Link to={`/dashboard/payment/${cart._id}`}>
                    <button
                      className="text-white btn"
                      style={{ backgroundColor: "#895E40" }}
                    >
                      <i class="fab fa-stripe fa-2x"></i>
                    </button>
                  </Link>
                )}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Cart;
