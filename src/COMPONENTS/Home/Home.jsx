import React from "react";
import CardSection from "../CardSection/CardSection";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import Works from "../Works/Works";
import Slider from "../Slider/Slider";
import Blog from "../Blogs/Blog";
import "./Home.css";
import backgroundImage from "./allground.jpg";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        // className="background-container"
        // style={{
        //   backgroundImage: `url(${backgroundImage})`,
        // }}
      >
        <NavBar />
        <Outlet></Outlet>
        <Header />
        <Works />
        <CardSection />
        <Slider />
        <Blog />
      </div>
    </>
  );
};

export default Home;
