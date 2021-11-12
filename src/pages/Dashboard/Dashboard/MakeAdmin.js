import React from "react";
import { useForm } from "react-hook-form";
import admin from "../../../assets/images/signup.png";
import useAuth from "./../../../hooks/useAuth";
const MakeAdmin = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const { loading } = useAuth();

  const onSubmit = (data) => {
    fetch("https://cryptic-forest-81698.herokuapp.com/makeAdmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    alert("Successfully added!!");
    console.log(data);
  };

  return (
    <div>
      <h1 style={{ color: "#895E40", textAlign: "center", marginTop: "10px" }}>
        Make Admin
      </h1>
      <div className="m-auto mt-5 login-box w-50">
        <div className="p-5 mb-5 border border-0 rounded shadow event-box d-flex justify-content-center align-items-center bg-body">
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="input-field"
                name="email"
                placeholder="Email"
                type="email"
                {...register("email", { required: true })}
              />
              <br />

              <input
                className="mt-3 border-0 submit-btn btn btn-danger"
                type="submit"
                value="Make as Admin"
                style={{ backgroundColor: "#A07047" }}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
