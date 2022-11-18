import React from "react";
import Advertisment from "../components/Advertisment/Advertisment";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import LandingSection from "../components/LandingSection/LandingSection";
import Products from "../components/Featured/Products";
import Filter from "../components/Filter/Filter";

const Appearls = () => {
  return (
    <div>
      <Advertisment title="Free Shipping For Orders Above 150 USD ! " />
      <NavBar />
      <LandingSection />
      <div className="productsAndFilterContainer">
        <Products />
        <Filter />
      </div>
      <Footer />
    </div>
  );
};

export default Appearls;
