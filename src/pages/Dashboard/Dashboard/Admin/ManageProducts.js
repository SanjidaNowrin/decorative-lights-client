import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const ManageProducts = () => {
  const [event, setEvent] = useState([]);

  const [control, setConrol] = useState(false);

  useEffect(() => {
    fetch("https://decorative-lights-server.vercel.app/allProducts")
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, [control]);

  const handleDelete = (id) => {
    fetch(`https://decorative-lights-server.vercel.app/deleteProducts/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Are you sure?");
          setConrol(!control);
        } else {
          setConrol(false);
        }
      });
    console.log(id);
  };
  return (
    <div className="container">
      <h1 className="mt-4 mb-5 text-center" style={{ color: "#895E40" }}>
        All Booking {event?.length}
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
            <th>Destination description</th>
            <th>Image Link</th>
            <th>Action</th>
          </tr>
        </thead>
        {event?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd.title}</td>
              <td>{pd.desc}</td>
              <td>{pd.img}</td>
              <button
                onClick={() => handleDelete(pd._id)}
                className="p-2 mt-2 text-white ms-2 btn me-2"
                style={{ backgroundColor: "#895E40" }}
              >
                Delete
              </button>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageProducts;
