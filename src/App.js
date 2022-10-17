import React, { Component } from "react";
import "./App.css";
import Advertisment from "./components/Advertisment/Advertisment";
import NavBar from "./components/NavBar/NavBar";
import LandingSection from "./components/LandingSection/LandingSection";
import Featured from "./components/Featured/Featured";
import Footer from "./components/Footer/Footer";
import AsSeenOn from "./components/AsSeenOn/AsSeenOn";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";

class App extends Component {
  render() {
    return (
      <>
        <Advertisment title="Free Shipping For Orders Above 150 USD ! " />
        <NavBar />
        <LandingSection />
        <Featured />
        <RecommendedVideos />
        <AsSeenOn />
        <Footer />
      </>
    );
  }
}

export default App;
