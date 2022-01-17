import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "./../../../../hooks/useAuth";

const Cart = () => {
  const [control, setControl] = useState(false);
  const [reload, setReload] = useState(true);
  const { allContext, remove } = useAuth();
  const [carts, setCarts] = useState([]);
  const { user } = allContext;
  const { email } = user;

  useEffect(() => {
    const query = `https://cryptic-forest-81698.herokuapp.com/singlecart?email=${email}`;
    fetch(query)
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, [email, reload]);
  console.log(carts);
  //delete
  const handleDelete = (id) => {
    const confirmation = window.confirm("are you sure to delete?");
    if (confirmation) {
      fetch(`https://cryptic-forest-81698.herokuapp.com/delete/${id}`, {
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
    console.log(id);
  };
  return (
    <div className="my-4">
      <Container>
        <Row>
          <Col md={8}>
            {carts?.map((cart) => (
              <Row
                key={cart._id}
                className="my-3 me-4"
                style={{ backgroundColor: "#EFEFEF" }}
              >
                <Col
                  className="p-0 d-flex align-items-center justify-content-center"
                  md={4}
                >
                  <img width="100%" src={cart.img} alt="" />
                </Col>
                <Col className="py-2">
                  <h4 style={{ color: "#895E40" }}>Product Name:</h4>
                  <h5 className="m-0">{cart.title}</h5>
                  <br />
                  <h4 style={{ color: "#895E40" }}>User Information:</h4>
                  <h5 className="mt-3"> {cart.name}</h5>
                  <h5> {cart.email}</h5>
                  <h5 className="m-0"> {cart.address}</h5>
                  <h5 className="m-0"> {cart.booking_id}</h5>
                  <h5 className="m-0"> {cart.price}</h5>

                  <button
                    className="p-2 mt-4 mb-3 text-white ms-2 btn me-2"
                    style={{ backgroundColor: "#895E40" }}
                  >
                    {cart.status}
                  </button>
                  <button
                    onClick={() => handleDelete(cart._id)}
                    className="p-2 mt-4 mb-3 text-white ms-2 btn me-2"
                    style={{ backgroundColor: "#895E40" }}
                  >
                    Delete
                  </button>

                  <p className="m-0">
                    {cart.payment ? (
                      "Paid"
                    ) : (
                      <Link to={`/dashboard/payment/${cart._id}`}>
                        <button
                          className="p-2 mt-4 mb-3 text-white ms-2 btn me-2"
                          style={{ backgroundColor: "#895E40" }}
                        >
                          Pay
                        </button>
                      </Link>
                    )}
                  </p>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
