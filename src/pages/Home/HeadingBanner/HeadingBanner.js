import React from "react";
import "./HeadingBanner.css";
const HeadingBanner = () => {
  return (
    <div>
      <div className="parent mb-5 mt-3">
        <div className="d-flex text-center justify-content-center align-items-center h-100">
          <div className="text-center">
            <h3 style={{ fontFamily: "cursive" }} className="text-white">
              “Darkness cannot drive out darkness: only light can do that. Hate
              cannot drive out hate: only love can do that.” <br />{" "}
              <small style={{ color: "red" }}>
                ― Martin Luther King Jr., A Testament of Hope: The Essential
                Writings and Speeches
              </small>
            </h3>{" "}
            <button
              className="btn btn m-3"
              style={{ backgroundColor: "#A07047", color: "white" }}
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingBanner;
