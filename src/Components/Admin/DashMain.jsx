import React, { useState, useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const DashMain = () => {
    const [earnings, setEarnings] = useState(0);
    const lineChartRef = useRef(null);
    const doughnutChartRef = useRef(null);

    useEffect(() => {
        // Initialize charts
        const lineCtx = document.getElementById('lineChart').getContext('2d');
        const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');

        // Destroy existing charts if they exist
        if (lineChartRef.current) lineChartRef.current.destroy();
        if (doughnutChartRef.current) doughnutChartRef.current.destroy();

        // Create new charts
        lineChartRef.current = new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Earnings',
                    data: [2000, 3000, 4000, 3500, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000],
                    borderColor: '#0631a9',
                    borderWidth: 2,
                    fill: false,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: true },
                }
            }
        });

        doughnutChartRef.current = new Chart(doughnutCtx, {
            type: 'doughnut',
            data: {
                labels: ['Teachers', 'Staff', 'Others'],
                datasets: [{
                    data: [30, 30, 20],
                    backgroundColor: ['#0631a9', '#ffc107', '#17a2b8'],
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'bottom' },
                }
            }
        });

        // Cleanup function to destroy charts
        return () => {
            if (lineChartRef.current) lineChartRef.current.destroy();
            if (doughnutChartRef.current) doughnutChartRef.current.destroy();
        };
    }, []);

    const fetchEarnings = (period) => {
        // Simulate fetching earnings based on the period
        const simulatedEarnings = {
            weekly: 5000,
            monthly: 20000,
            yearly: 240000,
        };
        setEarnings(simulatedEarnings[period]);
    };

    return (
        <div className="Main">
            <style>{`
                :root {
                    --main: #0631a9;
                    --box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
                }

                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: "Besley", serif;
                }

                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                   
                }

                .Main {
                    margin-left: 20px;
                    padding: 20px;
                    flex: 1;
                    background:rgb(57, 103, 45);
                    min-height: 100vh;
                }

                .MainCard {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 20px;
                }

                .Card {
                    background:#fff;
                    border-radius: 10px;
                    box-shadow: var(--box-shadow);
                    padding: 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    transition: transform 0.3s;
                }

                .Card:hover {
                    transform: scale(1.05);
                }

                .Card .num {
                    font-size: 2rem;
                    color: var(--main);
                    font-weight: bold;
                }

                .Card .name {
                    color: #333;
                    font-size: 1.2rem;
                }

                .icons i {
                    font-size: 2.5rem;
                    color: var(--main);
                }

                .MainChart {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 20px;
                    margin-top: 20px;
                }

                .Chart {
                    background: #fff;
                    border-radius: 10px;
                    box-shadow: var(--box-shadow);
                    padding: 20px;
                }

                .Chart h1 {
                    text-align: center;
                    margin-bottom: 20px;
                    font-size: 1.5rem;
                    color: #333;
                }

                canvas {
                    max-width: 100%;
                    height: 250px;
                }

                @media (max-width: 800px) {
                    .MainChart {
                        grid-template-columns: 1fr;
                    }
                    .Main {
                        margin-left: 24px;
                        padding: 10px;
                        width: 100%;
                    }
                    .MainCard {
                        grid-template-columns: 1fr;
                    }
                    .Card {
                        width: 88%;
                        margin: 0 auto;
                    }
                    .dropbtn {
                        padding: 10px;
                        font-size: 16px;
                        border: none;
                        cursor: pointer;
                        border-radius: 5px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .dropbtn i {
                        margin-right: 0;
                    }

                    .dropbtn span {
                        display: none;
                    }
                }

                .dropdown {
                    position: relative;
                    display: inline-block;
                }

                .dropdown-content {
                    display: none;
                    position: absolute;
                    background-color: #f9f9f9;
                    min-width: 160px;
                    box-shadow: var(--box-shadow);
                    z-index: 1;
                }

                .dropdown-content a {
                    color: black;
                    padding: 12px 16px;
                    text-decoration: none;
                    display: block;
                }

                .dropdown-content a:hover {
                    background-color: #f1f1f1;
                }

                .dropdown:hover .dropdown-content {
                    display: block;
                }

                .dropdown:hover .dropbtn {
                    background-color: rgb(93, 184, 200);
                }

                .dropbtn {
                    background-color: rgb(200, 93, 186);
                    color: white;
                    padding: 10px;
                    font-size: 16px;
                    border: none;
                    cursor: pointer;
                    border-radius: 5px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .dropbtn i {
                    margin-right: 5px;
                }
            `}</style>

            <div className="MainCard">
                <div className="Card">
                    <div>
                        <div className="num">100</div>
                        <div className="name">Blogs</div>
                    </div>
                    <div className="icons"><i className="fas fa-user-graduate"></i></div>
                </div>
                <div className="Card">
                    <div>
                        <div className="num">50</div>
                        <div className="name">Learn Section Video</div>
                    </div>
                    <div className="icons"><i className="fas fa-chalkboard-teacher"></i></div>
                </div>
                <div className="Card">
                    <div>
                        <div className="num">30</div>
                        <div className="name">Trading Platform</div>
                    </div>
                    <div className="icons"><i className="fas fa-users"></i></div>
                </div>
                <div className="Card">
                    <div>
                        <div className="num">₹<span id="earnings">{earnings}</span></div>
                        <div className="name">Earnings</div>
                    </div>
                    <div className="icons"><i className="fas fa-hand-holding-usd"></i></div>
                    <div className="dropdown">
                        <button className="dropbtn"><i className="fas fa-calendar-alt"></i> <span>Period</span></button>
                        <div className="dropdown-content">
                            <a href="#" onClick={() => fetchEarnings('weekly')}>Weekly</a>
                            <a href="#" onClick={() => fetchEarnings('monthly')}>Monthly</a>
                            <a href="#" onClick={() => fetchEarnings('yearly')}>Yearly</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="MainChart">
                <div className="Chart">
                    <h1>Earnings (Past 12 Months)</h1>
                    <canvas id="lineChart"></canvas>
                </div>
                <div className="Chart">
                    <h1>Employees Distribution</h1>
                    <canvas id="doughnutChart"></canvas>
                </div>
            </div>
        </div>
    );
};

export default DashMain;
