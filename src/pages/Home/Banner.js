import React from "react";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
const Banner = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner3} class="d-block w-100" alt="..." height="600px" />

            <div className="carousel-caption d-none d-md-block">
              <h1 className="text-dark">ALAMP</h1>
              <h2>Low to High: Wood Nightstands</h2>
              <p>
                This time of the year brings cooler weather, shorter days,
                cocooning on the couch, Netflix bingeing, and indoor projects
                and crafts.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={banner2}
              className="d-block w-100"
              alt="..."
              height="600px"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="text-dark">ALAMP</h1>
              <h2>Table Lamps High to Low</h2>
              <p>
                This time of the year brings cooler weather, shorter days,
                cocooning on the couch, Netflix bingeing, and indoor projects
                and crafts.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={banner1}
              className="d-block w-100"
              alt="..."
              height="600px"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="text-dark">ALAMP</h1>
              <h2>Trend We are living:Fluted Lamps</h2>
              <p>
                This time of the year brings cooler weather, shorter days,
                cocooning on the couch, Netflix bingeing, and indoor projects
                and crafts.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
