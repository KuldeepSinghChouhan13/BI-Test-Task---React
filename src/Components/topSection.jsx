import React from "react";
import "../App.css";

const TopSection = ({ data }) => {
  if (!data?.summary) return null;

  const { total, deaths, discharged } = data.summary;

  return (
    <div className="cards">
      <div className="card">
        <p className="count blue">{total.toLocaleString()}</p>
        <p className="label">Cases</p>
      </div>
      <div className="card">
        <p className="count red">{deaths.toLocaleString()}</p>
        <p className="label">Death</p>
      </div>
      <div className="card">
        <p className="count green">{discharged.toLocaleString()}</p>
        <p className="label">Recovered</p>
      </div>
    </div>
  );
};

export default TopSection;