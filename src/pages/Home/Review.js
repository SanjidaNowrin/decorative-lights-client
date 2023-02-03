import React, { useState, useEffect } from "react";
import Rating from "react-rating";
import { Spinner } from "react-bootstrap";
import Slider from "react-slick";
import "./SingleReview.css";

const Review = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("https://decorative-lights-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(true);
      });
  }, []);
  return (
    <div>
      <h2 className="reviewTitle"> Reviews </h2>
      <div className="review-bg">
        <div className="reviews container" id="reviews">
          {loading ? (
            <>
              <Slider {...settings}>
                {reviews.map((review) => (
                  <div key={review._id}>
                    <div className="reviewCart">
                      <img
                        style={{
                          width: "6rem",
                          height: "6rem",
                          borderRadius: "50%",
                          margin: "auto",
                          marginTop: "15px",
                        }}
                        src={review?.img}
                        alt=""
                      />
                      <h5 style={{ marginTop: "10px" }}>{review?.name}</h5>
                      <Rating
                        style={{ color: "#FF9529" }}
                        initialRating={review?.rating}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        readonly
                      ></Rating>{" "}
                      <br />
                      <p style={{ marginTop: "12px" }}>
                        <q>{review?.description}</q>
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </>
          ) : (
            <div className="spinner">
              <Spinner animation="border" variant="dark" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Review;
