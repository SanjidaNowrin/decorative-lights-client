import React, { useState, useEffect } from "react";
import SingleReview from "./SingleReview";
const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <div className="container mt-4">
        <h1 style={{ color: "#895E40" }} className="container text-center">
          Customers Review
        </h1>

        <div className="row">
          {reviews.map((singlereview) => (
            <SingleReview
              singlereview={singlereview}
              key={singlereview._id}
            ></SingleReview>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Review;
