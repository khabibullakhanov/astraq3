import React, { useState, useEffect } from 'react'
import "./Ticketing.css"
import { Header } from "../../Companenta/Header/Header"
import { TicketingCards } from '../../Companenta/Ticketing/TicketingCards'
import { TicketingData } from '../../Companenta/Data/TicketingData'
import { TicketingPagination } from '../../Companenta/Ticketing/TicketingPagnation'
import { TicketingPaginationCards } from '../../Companenta/Ticketing/TicketingPaginationCards'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LightModeIcon from '@mui/icons-material/LightMode';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'

export function Ticketing() {

    const [user, setUser] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setpostsPerPage] = useState(8)
    useEffect(() => {
        TicketingData()
            .then((data) => {
                setUser(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    }

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const d = new Date();
    let nowMonth = months[d.getMonth()];

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentUsers = user.slice(firstPostIndex, lastPostIndex);

    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
        setDateState(e)
    }

    return (
        <div id="ticketing-main-container">
            <div id="ticketing-main-container-left">
                <div>
                    <Header />
                </div>
                <div>
                    <h1>Ticketing</h1>
                </div>
                <div>
                    <TicketingCards />
                </div>
                <div id='tiketing-pagination-container'>
                    <div id='banking-main-container-left-main-bottom-header'>
                        <h2 id="font-weight-600">Lastest Transaction</h2>
                        <div id='banking-main-container-left-main-bottom-header-right'>
                            <div id="blue-color">
                                <p>View all</p>
                            </div>
                        </div>
                    </div>
                    <TicketingPaginationCards users={currentUsers} />
                    <TicketingPagination
                        totalPosts={user.length}
                        setCurrentPage={setCurrentPage}
                        postsPerPage={postsPerPage}
                        currentPage={currentPage}
                    />
                </div>
            </div>
            <div id="ticketing-main-container-right">
                <div id="calendar-main-container">
                    <h2 id="ticketing-right-container-text" className="red-color">Calendar</h2>
                    <div id="calendar-container">
                        {/* <Calendar
                            value={dateState}
                            onChange={changeDate}
                        /> */}
                        <div id='calendar-header'>
                            <ChevronLeftIcon />
                            <h1 id="font-weight-600">{nowMonth}</h1>
                            <ChevronRightIcon />
                        </div>
                        <div id="calendar-inside">
                            <div id="calendar-week-day">
                                <p className="red-color" id='grey-color'>M</p>
                                <p id="font-weight-600">1</p>
                                <p id="font-weight-600">8</p>
                                <p id="font-weight-600">15</p>
                                <p id="font-weight-600">22</p>
                                <p id="font-weight-600">29</p>
                            </div>
                            <div id="calendar-week-day">
                                <p className="red-color" id='grey-color'>T</p>
                                <p id="font-weight-600">1</p>
                                <p id="font-weight-600">8</p>
                                <p id="font-weight-600">15</p>
                                <p id="font-weight-600">22</p>
                                <p id="font-weight-600">29</p>
                            </div>
                            <div id="calendar-week-day">
                                <p className="red-color" id='grey-color'>W</p>
                                <p id="font-weight-600">1</p>
                                <p id="font-weight-600">8</p>
                                <p id="font-weight-600">15</p>
                                <p id="font-weight-600">22</p>
                                <p id="font-weight-600">29</p>
                            </div>
                            <div id="calendar-week-day">
                                <p className="red-color" id='grey-color'>T</p>
                                <p id="font-weight-600">1</p>
                                <p id="font-weight-600">8</p>
                                <p id="font-weight-600">15</p>
                                <p id="font-weight-600">22</p>
                                <p id="font-weight-600">29</p>
                            </div>
                            <div id="calendar-week-day">
                                <p className="red-color" id='grey-color'>F</p>
                                <p id="font-weight-600">1</p>
                                <p id="font-weight-600">8</p>
                                <p id="font-weight-600">15</p>
                                <p id="font-weight-600">22</p>
                                <p id="font-weight-600">29</p>
                            </div>
                            <div id="calendar-week-day">
                                <p className="red-color" id='grey-color'>S</p>
                                <p id="font-weight-600">1</p>
                                <p id="font-weight-600">8</p>
                                <p className='today' id="font-weight-600">15</p>
                                <p id="font-weight-600">22</p>
                                <p id="font-weight-600">29</p>
                            </div>
                            <div id="calendar-week-day">
                                <p className="red-color" id='red-color'><LightModeIcon id="yellow-color" /></p>
                                <p id='red-color'>1</p>
                                <p id='red-color'>8</p>
                                <p id='red-color'>15</p>
                                <p id='red-color'>22</p>
                                <p id='red-color'>29</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='ticketing-today-container'>
                    <h2 id="ticketing-right-container-text" className="red-color">Today</h2>
                    <div id="ticketing-todo-content-container">
                        <div id="ticketing-todo-content">
                            <div id="ticketing-todo-content-left">
                                <div id="ticketing-todo-content-left-color-div"></div>
                                <div id="ticketing-todo-content-left-todo-name">
                                    <p id='grey-color'>09.00 - 10.00 AM</p>
                                    <h3 id="font-weight-600">Music Event</h3>
                                </div>
                            </div>
                            <div id="ticketing-todo-content-right">
                                <div id='grey-ticketing-div'></div>
                                <div id='grey-ticketing-div'></div>
                                <div id='grey-ticketing-div'></div>
                                <div id='color-ticketing-div'>5+</div>
                            </div>
                        </div>
                        <div id="ticketing-todo-content">
                            <div id="ticketing-todo-content-left">
                                <div id="ticketing-todo-content-left-color-div"></div>
                                <div id="ticketing-todo-content-left-todo-name">
                                    <p id='grey-color'>09.00 - 10.00 AM</p>
                                    <h3 id="font-weight-600">Music Event</h3>
                                </div>
                            </div>
                            <div id="ticketing-todo-content-right">
                                <div id='grey-ticketing-div'></div>
                                <div id='grey-ticketing-div'></div>
                                <div id='grey-ticketing-div'></div>
                                <div id='color-ticketing-div'>5+</div>
                            </div>
                        </div>
                        <div id="ticketing-todo-content">
                            <div id="ticketing-todo-content-left">
                                <div id="ticketing-todo-content-left-color-div"></div>
                                <div id="ticketing-todo-content-left-todo-name">
                                    <p id='grey-color'>09.00 - 10.00 AM</p>
                                    <h3 id="font-weight-600">Music Event</h3>
                                </div>
                            </div>
                            <div id="ticketing-todo-content-right">
                                <div id='grey-ticketing-div'></div>
                                <div id='grey-ticketing-div'></div>
                                <div id='grey-ticketing-div'></div>
                                <div id='color-ticketing-div'>5+</div>
                            </div>
                        </div>
                        <div id="ticketing-todo-content">
                            <div id="ticketing-todo-content-left">
                                <div id="ticketing-todo-content-left-color-div"></div>
                                <div id="ticketing-todo-content-left-todo-name">
                                    <p id='grey-color'>09.00 - 10.00 AM</p>
                                    <h3 id="font-weight-600">Music Event</h3>
                                </div>
                            </div>
                            <div id="ticketing-todo-content-right">
                                <div id='grey-ticketing-div'></div>
                                <div id='grey-ticketing-div'></div>
                                <div id='grey-ticketing-div'></div>
                                <div id='color-ticketing-div'>5+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
