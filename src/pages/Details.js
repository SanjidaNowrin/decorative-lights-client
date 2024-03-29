import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../hooks/useAuth";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const { img, desc, title, price } = details;
  const { allContext } = useAuth();
  const { user } = allContext;
  useEffect(() => {
    fetch(`https://decorative-lights-ecommerce.onrender.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const newData = { ...data };
    newData.status = "pending";
    newData.title = title;
    newData.desc = desc;
    newData.img = img;
    newData.price = price;

    //console.log(newData);
    fetch("https://decorative-lights-ecommerce.onrender.com/product/add", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("successfully added.");
          reset();
        } else {
          alert("Something is wrong.....");
        }
      });
  };
  return (
    <div>
      <Header></Header>
      <div>
        <h1 className="mt-4 text-center " style={{ color: "#A07047" }}>
          Confirm your order
        </h1>
        <div className="card mt-4 mb-3 border-0 container">
          <div className="row g-5 ">
            <div className="col-md-4 text-center ">
              <img
                src={img}
                className="img-fluid mt-5 border border-2 shadow"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className=" login-box">
                  <div className="p-5 mb-5 border border-0 rounded shadow event-box d-flex justify-content-center align-items-center bg-body">
                    <div className="login-form">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                          {...register("title")}
                          placeholder="Booking Title"
                          defaultValue={title}
                          className="p-2 m-2 w-100"
                        />

                        <input
                          {...register("desc")}
                          placeholder="desc"
                          defaultValue={desc}
                          className="p-2 m-2 w-100 h-100"
                        />
                        <input
                          {...register("price")}
                          placeholder="price"
                          defaultValue={price}
                          className="p-2 m-2 w-100 h-100"
                        />

                        <input
                          {...register("booking_id")}
                          defaultValue={id}
                          className="p-2 m-2 w-100"
                        />
                        <br />
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
                          {...register("phonenumber")}
                          placeholder="Phone Number"
                          className="p-2 m-2 w-100"
                        ></input>
                        <br />
                        <textarea
                          {...register("address")}
                          placeholder="Address"
                        ></textarea>
                        <br />

                        {errors.exampleRequired && (
                          <span>This field is required</span>
                        )}

                        <input
                          type="submit"
                          value="Confirm"
                          className="mt-3 text-white btn w-25"
                          style={{ backgroundColor: "#A07047" }}
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* form end */}
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Details;
