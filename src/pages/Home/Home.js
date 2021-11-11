import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Banner from "./Banner";
import HomeProduct from "./HomeProduct";
import Visit from "./Visit";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <HomeProduct></HomeProduct>
      <Visit></Visit>
      <Footer></Footer>
    </div>
  );
};

export default Home;
