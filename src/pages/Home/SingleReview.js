import React from "react";
import Rating from "react-rating";
const SingleReview = ({ singlereview }) => {
  const { _id, name, description, rating } = singlereview;
  return (
    <div className="mt-5 col-lg-4 col-sm-6 gx-5">
      <div
        className="p-3 mb-5 border-0 rounded shadow cardHover card w-100"
        style={{ background: "#EFEFEF" }}
      >
        <div className="card-body">
          <h3
            className="mb-3 text-center card-title font-weight-bold"
            style={{ color: "#895E40" }}
          >
            {name}
          </h3>
          <p className="text-center card-text">{description}</p>
          <h3
            className="mb-3 text-center card-text"
            style={{ color: "#895E40" }}
          >
            <Rating
              initialRating={rating}
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
              readonly
            ></Rating>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
