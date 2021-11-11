import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "./../../../../hooks/useAuth";

const Cart = () => {
  const { allContext, remove } = useAuth();
  const [carts, setCarts] = useState([]);
  const { user } = allContext;
  const { email } = user;

  useEffect(() => {
    const query = `http://localhost:5000/singlecart?email=${email}`;
    fetch(query)
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, [email]);
  console.log(carts);
  return (
    <div className="my-4">
      <Container>
        <Row>
          <Col md={8}>
            {carts?.map((cart) => (
              <Row
                key={cart._id}
                className="my-3 me-4"
                style={{ backgroundColor: "#C1D2E8" }}
              >
                <Col
                  className="p-0 d-flex align-items-center justify-content-center"
                  md={4}
                >
                  <img width="100%" src={cart.img} alt="" />
                </Col>
                <Col className="py-2">
                  <h3 className="m-0" style={{ color: "#237DB2" }}>
                    {cart.title}
                  </h3>
                  <h5 className="mt-3">User Name: {cart.name}</h5>
                  <h5>User Email: {cart.email}</h5>
                  <h5 className="m-0">Address: {cart.address}</h5>
                  <h5 className="m-0">Booking Id: {cart.booking_id}</h5>
                  <h5 className="m-0">Status: {cart.status}</h5>
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
