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
import { useDispatch, useSelector } from "react-redux";
import { acAddCrud, acDeleteCrud, acUpdateCrud } from "../../../Redux/CRUD";



export function ContactUser() {
    const contacts = useSelector((state) => state.crud);
    const dispatch = useDispatch();

    const [row, setRow] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [newContact, setNewContact] = useState([])
    const rowTodo = () => {
        setRow(true)
    }

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(contacts));
    }, [contacts]);

    const addNewContact = (e) => {
        e.preventDefault();
        setModalOpen(false)
        const NowDate = new Date().getTime()
        const newContacts = {
            contactsId: NowDate,
            contactsName: e.target.name.value,
            contactsWork: e.target.work.value,
            contactsCompany: e.target.company.value,
            contactsPhone: e.target.phone.value,
            contactsMessage: e.target.email.value,
        }


        dispatch(acAddCrud(newContacts))
        e.target.name.value = ""
        e.target.work.value = ""
        e.target.company.value = ""
        e.target.phone.value = ""
        e.target.email.value = ""
    }



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
                        <TextField required name='name' label="Type name..." variant="outlined" onChange={(e) => { setNewContact({ ...newContact, name: e.target.value }) }} placeholder="Contact name..." />
                        <TextField required name='work' label="Type job..." variant="outlined" onChange={(e) => { setNewContact({ ...newContact, work: e.target.value }) }} placeholder="Contact job..." />
                        <TextField required name='company' label="Type company..." variant='outlined' onChange={(e) => { setNewContact({ ...newContact, company: e.target.value }) }} placeholder="Contact company..." />
                        <TextField required name='phone' label="Type phone..." variant="outlined" onChange={(e) => { setNewContact({ ...newContact, phone: e.target.value }) }} placeholder="Phone number..." />
                        <TextField required name='email' label="Type email..." variant="outlined" onChange={(e) => { setNewContact({ ...newContact, email: e.target.value }) }} placeholder="Contact email..." />
                        <button type='submit'>
                            Add Contact
                        </button>
                    </form>
                </div>
            </div>
            <div id="users-container" style={row ? { flexDirection: 'column', } : {}}>
                {contacts.map((item, index) => {
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
                                <h3>{item.contactsName}</h3>
                                <p>{item.contactsWork}</p>
                            </div>

                            <div style={row ? { display: "flex", flexDirection: "row", gap: "2rem" } : {}} id='user-main-content-inside'>
                                <div id="user-work">
                                    <img src={bagImg} alt="" />
                                    <span>{item.contactsCompany}</span>
                                </div>
                                <div id="user-phone">
                                    <a href="tel:+998993414718">
                                        <img src={phone} alt="" />
                                    </a>
                                    <span>{item.contactsPhone}</span>
                                </div>
                                <div id="user-email">
                                    <img src={message} alt="" />
                                    <span>{item.contactsMessage}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

