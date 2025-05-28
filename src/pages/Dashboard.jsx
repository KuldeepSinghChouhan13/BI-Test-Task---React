import React, { useEffect, useState } from "react";
import axios from "axios";
import { Doughnut, Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
} from "chart.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faBell,
    faPowerOff,
    faChevronDown
} from '@fortawesome/free-solid-svg-icons';

import './Dashboard.css';


ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

export default function Dashboard() {
    const [covidData, setCovidData] = useState(null);

    useEffect(() => {
        axios.get("https://api.rootnet.in/covid19-in/stats/latest").then((response) => {
            setCovidData(response.data.data);
        });
    }, []);

    const doughnutChartData = covidData && {
        labels: ["Confirmed", "Recovered", "Deaths"],
        datasets: [
            {
                label: "Total Cases",
                data: [
                    covidData.summary.total,
                    covidData.summary.discharged,
                    covidData.summary.deaths
                ],
                backgroundColor: ["#6366F1", "#FBBF24", "#F43F5E"],
                borderWidth: 1
            }
        ]
    };

    const lineChartData = covidData && {
        labels: ["Confirmed", "Recovered", "Deaths"],
        datasets: [
            {
                label: "National Totals",
                data: [
                    covidData.summary.total,
                    covidData.summary.discharged,
                    covidData.summary.deaths
                ],
                fill: false,
                borderColor: "#10B981",
                tension: 0.3
            }
        ]
    };

    return (
        <div className="main-content">
            <div className="dashboard-header">
                <div className="search-container">
                    <input className="search-input" type="text" placeholder="Search" />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </div>

                <div className="header-actions">
                    <FontAwesomeIcon icon={faBell} className="icon-button" />

                    <div className="user-block">
                        <img src="https://via.placeholder.com/40" alt="User" className="user-avatar" />
                        <div className="user-info">
                            <span className="user-name">Michael Clarke</span>
                        </div>
                        <FontAwesomeIcon icon={faChevronDown} className="icon-button-arrow" />
                    </div>
                     <div className="icon-button-power">
                     <FontAwesomeIcon icon={faPowerOff} className="icon-button" />

                     </div>
                </div>
            </div>


            <div className="stats">
                <div className="card">
                    <h2>Total Cases</h2>
                    <p>{covidData ? covidData.summary.total.toLocaleString() : "Loading..."}</p>
                </div>
                <div className="card">
                    <h2>Recovered</h2>
                    <p>{covidData ? covidData.summary.discharged.toLocaleString() : "Loading..."}</p>
                </div>
                <div className="card">
                    <h2>Deaths</h2>
                    <p>{covidData ? covidData.summary.deaths.toLocaleString() : "Loading..."}</p>
                </div>
                <div className="card">
                    <h2>Last Updated</h2>
                    <p>{covidData ? covidData.lastRefreshed : "Loading..."}</p>
                </div>
            </div>

            <div className="charts">
                <div className="chart">
                    <h2>National Summary (Donut)</h2>
                    {doughnutChartData ? (
                        <Doughnut data={doughnutChartData} options={{ responsive: true }} />
                    ) : (
                        <p>Loading chart...</p>
                    )}
                </div>

                <div className="chart">
                    <h2>National Summary (Line)</h2>
                    {lineChartData ? (
                        <Line data={lineChartData} options={{ responsive: true }} />
                    ) : (
                        <p>Loading chart...</p>
                    )}
                </div>
            </div>
        </div>
    );
}
