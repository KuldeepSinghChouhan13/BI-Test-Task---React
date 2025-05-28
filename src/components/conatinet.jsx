import React from 'react'; 
import './Content.css';

const Content = () => {
  return (
    <div className="content-container">
      <div className="top-section">
        <div className="chart-box">
          <div className="chart-header">
           
          </div>
          <div className="donut-placeholder">[Donut Chart Here]</div>
        </div>
        <div className="chart-box">
          <div className="chart-header">
           
          </div>
          <div className="donut-placeholder">[Donut Chart Here]</div>
        </div>
      </div>

      <div className="middle-section">
        <div className="bar-chart-box">
          <div className="chart-header">
            
          </div>
          <div className="bar-placeholder">[Bar Chart Here]</div>
        </div>
        <div className="line-chart-box">
          <div className="chart-header">
            
          </div>
          <div className="line-placeholder">[Line Chart Here]</div>
        </div>
      </div>

      <div className="bottom-section">
        <div className="map-box">
          <h3>Map View</h3>
          <div className="map-placeholder">[Map and User Card Here]</div>
        </div>
      </div>
    </div>
  );
};

export default Content;
