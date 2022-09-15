import React from 'react'
import "./Navbar.css"
import mainLogo from "../../Assets/Icons/Main Logo.svg"
import Home from "../../Assets/Icons/Home icon.svg"
import Message from "../../Assets/Icons/Message.svg"
import Team from "../../Assets/Icons/Team.svg"
import Dollar from "../../Assets/Icons/Circle Dollar.svg"
import Javon from "../../Assets/Icons/Javon.svg"
import List from "../../Assets/Icons/List.svg"
import Hamyon from "../../Assets/Icons/Hamyon.svg"
import CreditCard from "../../Assets/Icons/25-credit card.svg"
import { NavLink, Link } from 'react-router-dom'



export function Navbar() {
    return (
        <div className='sidebar-container'>
            <Link className="nav-linkkk" to="/">
                <div className='logo-container'>
                    <img src={mainLogo} alt="" />
                    <p>Astraq</p>
                </div>
            </Link>
            <div className="sidebar-container-inside">
                <NavLink className="nav-link" activeclassname="active" to="/">
                    <div className='main-part'>
                        <div id="main-part-img">
                            <img src={Home} alt="" />
                        </div>
                        <div>
                            <p id="navbar-text">Dashboard</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink className="nav-link" activeclassname="active" to="/email">
                    <div className='main-part'>
                        <div id="main-part-img">
                            <img src={Message} alt="" />
                        </div>
                        <div>
                            <p id="navbar-text">Email</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink className="nav-link" activeclassname="active" to="/contact">
                    <div className='main-part'>
                        <div id="main-part-img">
                            <img src={Team} alt="" />
                        </div>
                        <div>
                            <p id="navbar-text">Contact</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink className="nav-link" activeclassname="active" to="/crypto">
                    <div className='main-part'>
                        <div id="main-part-img">
                            <img src={Dollar} alt="" />
                        </div>
                        <div>
                            <p id="navbar-text">Crypto</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink className="nav-link" activeclassname="active" to="/kanban">
                    <div className='main-part'>
                        <div id="main-part-img">
                            <img src={Javon} alt="" />
                        </div>
                        <div>
                            <p id="navbar-text">Kanban</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink className="nav-link" activeclassname="active" to="/invoice">
                    <div className='main-part'>
                        <div id="main-part-img">
                            <img src={List} alt="" />
                        </div>
                        <div>
                            <p id="navbar-text">Invoice</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink className="nav-link" activeclassname="active" to="/banking">
                    <div className='main-part'>
                        <div id="main-part-img">
                            <img src={Hamyon} alt="" />
                        </div>
                        <div>
                            <p id="navbar-text">Banking</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink className="nav-link" activeclassname="active" to="/ticketing">
                    <div className='main-part'>
                        <div id="main-part-img">
                            <img src={CreditCard} alt="" />
                        </div>
                        <div>
                            <p id='navbar-text'>Ticketing</p>
                        </div>
                    </div>
                </NavLink>
            </div >
        </div >
    )
}