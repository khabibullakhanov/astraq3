import React, { useState, useEffect, useRef } from 'react'
import "./ContactUser.css"
import greyStar from "../../../Assets/Icons/Grey Star.svg"
import bagImg from "../../../Assets/Icons/Bag.svg"
import phone from "../../../Assets/Icons/Phone.svg"
import message from "../../../Assets/Icons/Message.svg"
import yellowStar from "../../../Assets/Icons/Yellow Star.svg"
import { Checkbox } from "@mui/material";
import GridViewIcon from '@mui/icons-material/GridView';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import TextField from '@mui/material/TextField';



export function ContactUser({ user }) {
    const [row, setRow] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [newContact, setNewContact] = useState([])
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const rowTodo = () => {
        setRow(true)
    }
    const cart = JSON.parse(localStorage.getItem("newKantakt") || "[]") 
    const addNewContact = (e) => {
        e.preventDefault();
        setModalOpen(false);
        localStorage.setItem("newKantakt", JSON.stringify([...cart, newContact]))
        ref1.current.value = '';
        ref2.current.value = '';
        ref3.current.value = '';
        ref4.current.value = '';
        ref5.current.value = '';
    }

    const newContactss = cart.concat(user)

    return (
        <div id='contact-user-main-container'>
            <div id='contact-header-part'>
                <div>
                    <h1>Contact</h1>
                </div>
                <div id="contact-header-part-right">
                    <div id="contact-header-select-content">
                        <select>
                            <option>Newest</option>
                            <option>Oldest</option>
                            <option>More...</option>
                        </select>
                    </div>
                    <div onClick={rowTodo}>
                        <ViewAgendaIcon style={{ color: "#8A96B1", fontSize: "38px" }} />
                    </div>
                    <div onClick={() => setRow(false)}>
                        <GridViewIcon style={{ color: "#8A96B1", fontSize: "38px" }} />
                    </div>
                    <button onClick={() => setModalOpen(true)}>+</button>
                </div>
            </div>
            <div id='message-modal-container' style={modalOpen ? { display: "block", textAlign: "center" } : { display: "none" }}>
                <div id='dash-contact-container-inside'>
                    <div id='dash-contact-container-inside-header'>
                        <h1 id="dash-contact-modal-form-h1">Add Contact</h1>
                        <h2 onClick={() => { setModalOpen(false) }}>X</h2>
                    </div>
                    <form id='dash-contact-modal-form' onSubmit={addNewContact}>
                        {/* <input ref={ref1} type="text" onChange={(e) => { setNewContact({ ...newContact, name: e.target.value }) }} placeholder="Contact name..." /> */}
                        <TextField required ref={ref1} label="Type name..." variant="outlined" onChange={(e) => { setNewContact({ ...newContact, name: e.target.value }) }} placeholder="Contact name..." />
                        <TextField required ref={ref2} label="Type job..." variant="outlined" onChange={(e) => { setNewContact({ ...newContact, work: e.target.value }) }} placeholder="Contact job..." />
                        <TextField required ref={ref3} label="Type company..." variant='outlined' onChange={(e) => { setNewContact({ ...newContact, company: e.target.value }) }} placeholder="Contact company..." />
                        <TextField required ref={ref4} label="Type phone..." variant="outlined" onChange={(e) => { setNewContact({ ...newContact, phone: e.target.value }) }} placeholder="Phone number..." />
                        <TextField required ref={ref5} label="Type email..." variant="outlined" onChange={(e) => { setNewContact({ ...newContact, email: e.target.value }) }} placeholder="Contact email..." />
                        <button type='submit'>
                            Add Contact
                        </button>
                    </form>
                </div>
            </div>
            <div id="users-container" style={row ? { flexDirection: 'column', } : {}}>
                {newContactss.map((item, index) => {
                    return (
                        <div id="user-main-content" style={row ? { width: "auto", } : {}} key={index}>
                            <div id='user-main-content-header'>
                                <div id='user-main-content-grey-div'>

                                </div>
                                <div>
                                    <Checkbox icon={<img src={greyStar} />} checkedIcon={<img src={yellowStar} />} />
                                </div>
                            </div>
                            <div id='user-main-content-text'>
                                <h3>{item.name}</h3>
                                <p>{item.work}</p>
                            </div>

                            <div style={row ? { display: "flex", flexDirection: "row", gap: "2rem" } : {}} id='user-main-content-inside'>
                                <div id="user-work">
                                    <img src={bagImg} alt="" />
                                    <span>{item.company}</span>
                                </div>
                                <div id="user-phone">
                                    <a href="tel:+998993414718">
                                        <img src={phone} alt="" />
                                    </a>
                                    <span>{item.phone}</span>
                                </div>
                                <div id="user-email">
                                    <img src={message} alt="" />
                                    <span>{item.email}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

