import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Banner from "./Banner";
import HomeProduct from "./HomeProduct";
import Review from "./Review";
import Visit from "./Visit";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <HomeProduct></HomeProduct>
      <Review></Review>
      <Visit></Visit>
      <Footer></Footer>
    </div>
  );
};

export default Home;
