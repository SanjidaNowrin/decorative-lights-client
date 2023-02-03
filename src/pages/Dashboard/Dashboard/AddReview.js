import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "./../../../hooks/useAuth";
const AddReview = () => {
  const { allContext } = useAuth();
  const { user } = allContext;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://decorative-lights-ecommerce.onrender.com/addreview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    alert("review Added");
  };
  return (
    <div className="mb-5">
      <h1 className="mt-5 text-center " style={{ color: "#895E40" }}>
        Add Review
      </h1>
      <div lassName="mt-0 col-md-6">
        <div className="p-3 m-auto mt-5 mb-5 rounded shadow login-box w-25 bg-body">
          <div className="border border-0 event-box d-flex justify-content-center align-items-center">
            <div className="mt-3 login-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name")}
                  placeholder="name"
                  defaultValue={user.displayName}
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  {...register("email")}
                  defaultValue={user.email}
                  type="email"
                  className="p-2 m-2 w-100"
                />

                <br />
                <input
                  {...register("description")}
                  placeholder="Description"
                  className="p-3 m-2 w-100"
                />
                <br />
                <input
                  {...register("img", { required: true })}
                  placeholder="Image Link"
                  className="p-3 m-2 w-100"
                />
                <br />
                <input
                  {...register("rating")}
                  placeholder="Rating"
                  className="p-3 m-2 w-100"
                />
                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  type="submit"
                  value="Add"
                  className="mt-3 mb-3 btn w-50"
                  style={{ backgroundColor: "#895E40", color: "white" }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
