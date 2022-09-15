import React, { useState, useEffect, useRef } from 'react'
import "./Email.css"
import { Header } from "../../Companenta/Header/Header"
import { NavLink } from 'react-router-dom'
import galarey from "../../Assets/Icons/Galarey Icon.svg"
import blueGalarey from "../../Assets/Icons/Blue Galerey.svg"
import sendLogo from "../../Assets/Icons/Send Logo.svg"
import whiteStar from "../../Assets/Icons/Start None.svg"
import fileLogo from "../../Assets/Icons/White File.svg"
import markLogo from "../../Assets/Icons/Mark Icon.svg"
import clock from "../../Assets/Icons/Clock Icon.svg"
import siyohrangTortburchak from "../../Assets/Icons/Email Blue Rectangle.svg"
import pushtiTortburchak from "../../Assets/Icons/Email Pnk Rectangle.svg"
import orangeTortburchak from "../../Assets/Icons/Email Yellow Rectangle.svg"
import team from "../../Assets/Icons/Team.svg"
import card from "../../Assets/Icons/25-credit card.svg"
import { EmailUsers } from "../../Companenta/Data/EmailUsers"
import { EmailItem } from '../../Companenta/Email/EmailItem'
import { EmailPagination } from "../../Companenta/Email/EmailPagination"
import trash from "../../Assets/Icons/Trash Icon.svg"
import krestik from "../../Assets/Icons/Iks Icon.svg"
import tepgagaPastga from "../../Assets/Icons/tepaga Strelka.svg"
import star from "../../Assets/Icons/Grey Star.svg"
import undov from "../../Assets/Icons/Grey Undov.svg"
import betta from "../../Assets/Icons/Betta.svg"
import yonlaganI from "../../Assets/Icons/Yonlagan I.svg"
import underLine from "../../Assets/Icons/U Underline.svg"
import tLogo from "../../Assets/Icons/T logo.svg"
import alignLeft from "../../Assets/Icons/Align Left.svg"
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import alignCenter from "../../Assets/Icons/Align Center.svg"
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import alignRight from "../../Assets/Icons/Align Right.svg"
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import galareya from "../../Assets/Icons/Galareya Icon.svg"
import skripka from "../../Assets/Icons/Grey Skripka.svg"
import uchNuqta from "../../Assets/Icons/3 nuqta.svg"
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import yellowStar from "../../Assets/Icons/Yellow Star.svg"
import { Checkbox } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from "react-redux";
import { acAddCrud, acDeleteCrud, acUpdateCrud } from "../../Redux/CRUD";
import { useSnackbar } from 'notistack'



export function Email() {
    const emailUsers = useSelector((state) => state.crud);
    const dispatch = useDispatch();

    const ref1 = useRef(null)
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const { enqueueSnackbar } = useSnackbar()
    const [user, setUser] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setpostsPerPage] = useState(5)
    const [imgEmail, setImgEmail] = useState({
        leftImg: {},
        rightImg: {},
    })
    const [alignLeft, setAlignLeft] = useState(false)
    const [alignCenter, setAlignCenter] = useState(false)
    const [alignRight, setAlignRight] = useState(false)
    const [deleteItem, setDeleteItem] = useState(false)
    const [message, setMessage] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [newContact, setNewContact] = useState([])


    // useEffect(() => {
    //     EmailUsers()
    //         .then((data) => {
    //             setUser(data)
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }, [])

    const cart = JSON.parse(localStorage.getItem("submitXabar") || "[]")

    const submitXabar = () => {
        localStorage.setItem('submitXabar', JSON.stringify([...cart, message]))
        ref1.current.value = ""
    }

    const handleSelect = () => {

    }

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentUsers = user.slice(firstPostIndex, lastPostIndex);


    const addNewContact = (e) => {
        e.preventDefault();
        setModalOpen(false)
        const NowDate = new Date().getTime()
        const newUser = {
            id: NowDate,
            name: e.target.name.value,
            job: e.target.job.value,
        };

        dispatch(acAddCrud(newUser))
        e.target.name.value = ""
        e.target.job.value = ""

    }

    return (
        <div id='email-main-container'>
            <div id='message-modal-container' style={modalOpen ? { display: "block", textAlign: "center" } : { display: "none" }}>
                <div id='dash-contact-container-inside'>
                    <div id='dash-contact-container-inside-header'>
                        <h1 id="dash-contact-modal-form-h1">Add Contact</h1>
                        <h2 onClick={() => { setModalOpen(false) }}>X</h2>
                    </div>
                    <form id='dash-contact-modal-form' onSubmit={addNewContact}>
                        <TextField ref={ref2} required label="Type name..." name='name' variant="outlined" onChange={(e) => { setNewContact({ ...newContact, name: e.target.value }) }} placeholder="Contact name..." />
                        <TextField ref={ref3} required label="Type job..." name='job' variant="outlined" onChange={(e) => { setNewContact({ ...newContact, text: e.target.value }) }} placeholder="Contact job..." />
                        <button type='submit'>
                            Add Contact
                        </button>
                    </form>
                </div>
            </div>
            <div id='email-main-container-left'>
                <div>
                    <Header />
                </div>
                <div>
                    <h1>Email</h1>
                </div>
                <div id='email-main-container-left-inside'>
                    <div id='email-main-container-left-inside-left'>
                        <button id='email-main-container-left-inside-left-header-button' onClick={() => { setModalOpen(true) }}>+ New Mail</button>
                        <div id='email-main-container-left-inside-left-nav'>
                            <NavLink activeclassname="email-nav" id='email-navbar-item' to="/email">
                                <img src={galarey} alt="" />
                                <p>Inbox</p>
                            </NavLink>
                            <NavLink activeclassname="email-nav" id='email-navbar-item' to="/email">
                                <img src={sendLogo} alt="" />
                                <p>Send</p>
                            </NavLink>
                            <NavLink activeclassname="email-nav" id='email-navbar-item' to="/email">
                                <img src={whiteStar} alt="" />
                                <p>Favourite</p>
                            </NavLink>
                            <NavLink activeclassname="email-nav" id='email-navbar-item' to="/email">
                                <img src={fileLogo} alt="" />
                                <p>Inbox</p>
                            </NavLink>
                            <NavLink activeclassname="email-nav" id='email-navbar-item' to="/email">
                                <img src={markLogo} alt="" />
                                <p>Inbox</p>
                            </NavLink>
                            <NavLink activeclassname="email-nav" id='email-navbar-item' to="/email">
                                <img src={clock} alt="" />
                                <p>Inbox</p>
                            </NavLink>
                            <select onClick={handleSelect} id='email-main-container-left-inside-left-select'>
                                <option>Info</option>
                                <option>Few</option>
                                <option>More</option>
                            </select>
                        </div>
                        <p id='email-main-container-left-inside-left-label'>Labels</p>
                        <div id='email-main-container-left-inside-left-bottom-nav'>
                            <div id='email-main-container-left-inside-left-bottom-nav-item'>
                                <img src={siyohrangTortburchak} alt="" />
                                <p>Works</p>
                            </div>
                            <div id='email-main-container-left-inside-left-bottom-nav-item'>
                                <img src={pushtiTortburchak} alt="" />
                                <p>Side projects</p>
                            </div>
                            <div id='email-main-container-left-inside-left-bottom-nav-item'>
                                <img src={orangeTortburchak} alt="" />
                                <p>Offer</p>
                            </div>
                        </div>
                    </div>
                    <div id='email-main-container-left-inside-right'>
                        <div id='email-main-container-left-inside-right-header'>
                            <div id='email-main-container-left-inside-right-header-item'>
                                <img src={blueGalarey} alt="" />
                                <p>Primary</p>
                            </div>
                            <div id='email-main-container-left-inside-right-header-item'>
                                <img src={team} alt="" />
                                <p>Socials</p>
                            </div>
                            <div id='email-main-container-left-inside-right-header-item'>
                                <img src={card} alt="" />
                                <p>Promotion</p>
                            </div>
                        </div>
                        <div id="email-main-container-left-inside-right-userlar">
                            <EmailItem
                                users={emailUsers}
                            />
                            <EmailPagination
                                totalPosts={emailUsers.length}
                                setCurrentPage={setCurrentPage}
                                postsPerPage={postsPerPage}
                                currentPage={currentPage}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div id='email-main-container-right'>
                <div id='email-main-container-right-header'>
                    <h1 id='font-weight-600'>Preview</h1>
                    <div id='email-main-container-right-header-right'>
                        <img src={trash} alt="" onClick={() => setDeleteItem(true)} />
                        <img src={tepgagaPastga} alt="" />
                        <img src={krestik} alt="" onClick={() => setDeleteItem(true)} />
                        <KeyboardReturnIcon onClick={() => setDeleteItem(false)} style={deleteItem ? { dsplay: "block", color: "#8A96B1" } : { display: "none" }} />
                    </div>
                </div>
                <div style={deleteItem ? { display: "none" } : { display: "block" }}>
                    <div id='email-main-container-right-inside-main'>
                        <div id='email-main-container-right-report'>
                            <div id='email-main-container-right-report-left'>
                                <h3 id='font-weight-600'>Weekly Meeting Report</h3>
                                <p id="grey-color">Today, August 30th 2022  04:45 PM</p>
                            </div>
                            <div id='email-main-container-right-report-right'>
                                <Checkbox icon={<img src={star} />} checkedIcon={<img src={yellowStar} />} />

                                <img src={undov} alt="" />
                            </div>
                        </div>
                        <div id='email-main-container-right-user'>
                            <div id="banking-right-grey-background"></div>
                            <div>
                                <h4 id='font-weight-600'>Karen Hope</h4>
                                <p id='grey-color'>soap@mail.com</p>
                            </div>
                        </div>
                        <div id='email-main-container-right-main-text'>
                            <div>
                                <p id="grey-color">Hi Madison,</p>
                            </div>
                            <div>
                                <p id="grey-color"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna .</p>
                            </div>
                            <div>
                                <p id="grey-color">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                            </div>
                            <div>
                                <p id="grey-color">Regards,</p>
                                <p id="grey-color">Nadila</p>
                            </div>
                        </div>
                    </div>
                    <div id='email-main-container-right-color-container'>
                        <div id='email-main-container-right-color-container-left'>
                            <div id='email-main-container-right-color-container-grey'>
                                <img src={imgEmail.leftImg.size ? URL.createObjectURL(imgEmail.leftImg) : <AddIcon />} />
                            </div>
                            <div id='email-main-container-right-color-container-bottom'>
                                <label>
                                    <input type="file" onChange={(e) => { setImgEmail({ ...imgEmail, leftImg: e.target.files[0] }) }} />
                                    <img src={skripka} alt="" />
                                    <p>Image's type...</p>
                                </label>
                            </div>
                        </div>
                        <div id='email-main-container-right-color-container-left'>
                            <div id='email-main-container-right-color-container-grey'>
                                <img src={imgEmail.rightImg.size ? URL.createObjectURL(imgEmail.rightImg) : <AddIcon />} />
                            </div>
                            <div id='email-main-container-right-color-container-bottom'>
                                <label>
                                    <input type="file" onChange={(e) => { setImgEmail({ ...imgEmail, rightImg: e.target.files[0] }) }} />
                                    <img src={skripka} alt="" />
                                    <p>Image's type...</p>
                                </label>
                            </div>
                        </div>
                    </div>
                    {cart.map((item, index) => {
                        return (
                            <div id="email-xabar-div">
                                <h6>{item.xabar}</h6>
                            </div>
                        )
                    })}
                    <form onSubmit={submitXabar}>
                        <div id='email-main-container-right-message-container'>
                            <input ref={ref1} type="text" onChange={(e) => { setMessage({ ...message, xabar: e.target.value }) }} />
                            <div id='email-main-container-right-message-container-bottom'>
                                <div id='email-main-container-right-message-container-bottom-left'>
                                    <img src={betta} alt="" />
                                    <img src={yonlaganI} alt="" />
                                    <img src={underLine} alt="" />
                                    <img src={tLogo} alt="" />
                                </div>
                                <div id='email-main-container-right-message-container-bottom-right'>
                                    <FormatAlignLeftIcon style={{ color: "#8A96B1" }} onClick={() => { setAlignLeft(true) }} />
                                    <FormatAlignCenterIcon style={{ color: "#8A96B1" }} onClick={() => { setAlignCenter(true) }} />
                                    <FormatAlignRightIcon style={{ color: "#8A96B1" }} onClick={() => { setAlignRight(true) }} />
                                </div>
                            </div>
                        </div>
                        <div id='email-main-container-right-message-bottom'>
                            <div id='email-main-container-right-message-bottom-left'>
                                <img src={skripka} alt="" />
                                <img src={galareya} alt="" />
                                <img src={uchNuqta} alt="" />
                            </div>
                            <div id='email-main-container-right-message-bottom-right'>
                                <button type='submit'>
                                    Send
                                </button>
                                <img src={sendLogo} alt="" />
                            </div>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    )
}
