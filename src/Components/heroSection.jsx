"use client";

import React, { useEffect } from "react";
import TopSection from "./topSection";
import "../App.css";
import { getCovidData } from "../Service/data";

const HeroSection = () => {
  const [data, setData] = React.useState([]);

  async function getData() {
    const data = await getCovidData();
    console.log(data, "123456");
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="dashboard">
      <div className="main-content">
        <div className="top-bar">
          <h1>
            Covid-19 <span className="subheading">Live Tracker Dashboard</span>
          </h1>
        </div>

        <TopSection data={data} />
      </div>
    </div>
  );
};

export default HeroSection;
