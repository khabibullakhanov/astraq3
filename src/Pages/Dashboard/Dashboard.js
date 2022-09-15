import React, { useState, useEffect } from 'react';
import "./Dashboard.css";
import dollar from "../../Assets/Icons/White Dollor.svg"
import selectIcon from "../../Assets/Icons/Select Icon.svg"
import purpleSt from "../../Assets/Images/Purple Statistics.png"
import pinkSt from "../../Assets/Images/Pink Statistics.png"
import { PureComponent } from '../../Companenta/Statistics/PureComponent';
import { BottomCards } from '../../Companenta/Dashboard Companents/BottomCard/BottomCards';
import { DashboardCards } from '../../Companenta/Dashboard Companents/DashboardCard/DashboardCards';
import { Header } from '../../Companenta/Header/Header';
import { DashboardRightCard } from '../../Companenta/Dashboard Companents/DashboardRightCard/DashboardRightCard';
import { Persent } from '../../Companenta/Persent/Persent';
import { DashboardActivity } from '../../Companenta/Dashboard Companents/DashboardActivity/DashboardActivity';
import { DashboardPieChart } from '../../Companenta/Dashboard Companents/Pie Chart/DashboardPieChart';
import pinkTolqin from "../../Assets/Images/Vector (8).png"
import kokTolqin from "../../Assets/Images/Vector (9).png"
import { DashboardRightUsers } from "../../Companenta/Data/DashboardRightUsers"
import { DashboarRightCardPagination } from "../../Companenta/Dashboard Companents/DashboardRightCard/DashboarRightCardPagination"


export function Dashboard() {

    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setpostsPerPage] = useState(2)

    useEffect(() => {
        DashboardRightUsers()
            .then((data) => {
                setUsers(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);


    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentUsers = users.slice(firstPostIndex, lastPostIndex);

    return (
        <div id='dashboard-main'>
            <div id='dashboard-main-left'>
                <div>
                    <Header />
                </div>
                <div>
                    <h1 id='dashboard-text'>Dashboard</h1>
                </div>
                <DashboardCards />
                <div id='activity'>
                    <h1>Activity</h1>
                    <div id='activity-right'>
                        <div id='activity-right-first'>
                            <div id="ativity-purple">

                            </div>
                            <p>Last Year</p>
                        </div>
                        <div id='activity-right-first'>
                            <div id='activity-pink'>

                            </div>
                            <p>This Year</p>
                        </div>
                    </div>
                </div>
                <PureComponent id="chart-height" />
                <div id="dashboard-piechart-container">
                    <div id="dashboard-piechart">
                        <div id="column-charts">
                            <DashboardPieChart />
                            <p>Invoices Made</p>
                        </div>
                        <div id="column-charts">
                            <DashboardPieChart />
                            <p>Clients Growth</p>
                        </div>
                        <div id="column-charts">
                            <DashboardPieChart />
                            <p>Projects Done</p>
                        </div>
                    </div>
                    <div id="dashboard-piechart-container-center">
                    </div>
                    <div id="dashboard-piechart-container-right">
                        <div id="dashboard-piechart-container-right-top">
                            <div>
                                <p className='red-color' id='grey-color'>Completed</p>
                                <h2 id="font-weight-600">932 Task</h2>
                            </div>
                            <div>
                                <img src={pinkTolqin} alt="" />
                            </div>
                        </div>
                        <div id="dashboard-piechart-container-right-top">
                            <div>
                                <p className='red-color' id='grey-color'>Total  Project</p>
                                <h2 id="font-weight-600">1.932 Projects</h2>
                            </div>
                            <div>
                                <img src={kokTolqin} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="balance-container">
                    <div id='first-balance-container'>
                        <div id='first-balance-container-left'>
                            <div id='first-balance-container-left-img-container'>
                                <img src={dollar} alt="" />
                            </div>
                            <div id='first-balance-container-left-text'>
                                <p>Total Balance</p>
                                <h3>$40.123</h3>
                            </div>
                        </div>
                        <div id='first-balance-container-right'>
                            <span>Average from last month</span>
                            <div id='first-balance-container-right-text'>
                                <p>+0.5%</p>
                                <span>invoices sent</span>
                            </div>
                        </div>
                    </div>
                    <div id="second-balance-container">
                        <div id="second-balance-container-left">
                            <div id="second-balance-container-left-img-container">
                                <img src={selectIcon} alt="" />
                            </div>
                            <div id="second-balance-container-left-text">
                                <h2>$120.455</h2>
                                <p>Income</p>
                            </div>
                        </div>
                        <img src={purpleSt} alt="" />
                    </div>
                    <div id='third-balance-container'>
                        <div id='third-balance-container-left'>
                            <div id='third-balance-container-left-img-container'>
                                <img src={selectIcon} alt="" />
                            </div>
                            <div id='third-balance-container-left-text'>
                                <h2>$86.455</h2>
                                <p>Expense</p>
                            </div>
                        </div>
                        <div id='third-balance-container-right'>
                            <img src={pinkSt} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <BottomCards />
                </div>
            </div>
            <div id='dashboard-main-right'>
                <Persent />
                <h1>User Reviews</h1>
                <DashboardRightCard users={currentUsers} />
                <DashboarRightCardPagination
                    totalPosts={users.length}
                    setCurrentPage={setCurrentPage}
                    postsPerPage={postsPerPage}
                    currentPage={currentPage}
                />
                <h1>Recent Activity</h1>
                <DashboardActivity />
            </div>

        </div>
    )
}
