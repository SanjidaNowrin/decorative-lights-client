import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import useAuth from "./../../../../hooks/useAuth";
const ManageAllOrders = () => {
  const [event, setEvent] = useState([]);
  const [reload, setReload] = useState(true);
  const [control, setControl] = useState(false);
  const { allContext } = useAuth();
  const [carts, setCarts] = useState([]);
  const { user } = allContext;
  const { email } = user;

  useEffect(() => {
    const query = `https://cryptic-forest-81698.herokuapp.com/singlecart?email=${email}`;
    fetch(query)
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, [control, email, reload]);

  useEffect(() => {
    fetch("https://cryptic-forest-81698.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, [control, reload]);

  const handleDelete = (id) => {
    const confirmation = window.confirm("are you sure to delete");
    if (confirmation) {
      fetch(`https://cryptic-forest-81698.herokuapp.com/deleteEvent/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount === 1) {
            setControl(!control);
          }
        });
    }
  };
  function confirmHandler(id) {
    const confirmation = window.confirm("are you sure to confirm!!");
    if (confirmation) {
      fetch(`https://cryptic-forest-81698.herokuapp.com/allOrders/${id}`, {
        method: "put",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount === 1) {
            setReload(!reload);
          }
        });
    }
  }
  return (
    <div className="container">
      <h1 className="mt-4 mb-5 text-center" style={{ color: "#895E40" }}>
        All Placed Orders
      </h1>
      <Table
        striped
        bordered
        hover
        className="p-3 mb-3 mb-5 rounded shadow bg-body"
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {event?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd.title}</td>
              <td>{pd.name}</td>
              <td>{pd.email}</td>
              <td>{pd.address}</td>
              <td>{pd.status}</td>
              <button
                onClick={() => handleDelete(pd._id)}
                className="p-2 mt-2 text-white ms-2 btn me-2"
                style={{ backgroundColor: "#895E40" }}
              >
                Delete
              </button>
              <button
                onClick={() => confirmHandler(pd._id)}
                className="p-2 mt-2 mb-2 text-white ms-2 btn me-2"
                style={{ backgroundColor: "#895E40" }}
              >
                Pending
              </button>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};
export default ManageAllOrders;
