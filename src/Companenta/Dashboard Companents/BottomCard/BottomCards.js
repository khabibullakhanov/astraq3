import React, { useState, useEffect, useRef } from 'react'
import "./BottomCards.css"
import message from "../../../Assets/Icons/Message.svg"
import phone from "../../../Assets/Icons/Phone.svg"
import doubleTrue from "../../../Assets/Icons/Pink Double True.svg"
// import { DashboardContacts } from "../../Data/DashboardContacts"
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import { useSnackbar } from 'notistack'

export function BottomCards() {
    const { enqueueSnackbar } = useSnackbar()
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const [contacts, setContacts] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [newContact, setNewContact] = useState([])

    // useEffect(() => {
    //     DashboardContacts()
    //         .then((data) => {
    //             setContacts(data)
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }, []);
    const cart = JSON.parse(localStorage.getItem("yangiContacts") || "[]")
    localStorage.setItem("yangiContactsLength", JSON.stringify(contacts.length))
    const addNewContact = (e) => {
        setContacts(cart)
        e.preventDefault();
        setModalOpen(false)
        localStorage.setItem("yangiContacts", JSON.stringify([...cart, newContact]))
        ref1.current.value = '';
        ref2.current.value = '';
        ref3.current.value = '';
        ref4.current.value = '';
        enqueueSnackbar("Contact successfully saved", {
            autoHideDuration: "2000",
            variant: "success",
        });
    }
    // localStorage.setItem('yangiContacts', JSON.stringify(alone))
    // const yangiContactlar = JSON.parse(localStorage.getItem("yangiContacts"))


    const contactLength = contacts.length

    return (
        <div>
            <div id='footer'>

                <div id='bottom-contact-container'>
                    <div id='bottom-contact-container-header'>
                        <div id='bottom-contact-container-left'>
                            <h2>Contacts</h2>
                            <p>You have <span>{contactLength}</span> contacts</p>
                        </div>
                        <div id='bottom-contact-container-right'>
                            <button onClick={() => { setModalOpen(true) }}>+</button>
                        </div>
                    </div>
                    <div id='message-modal-container' style={modalOpen ? { display: "block", textAlign: "center" } : { display: "none" }}>
                        <div id='dash-contact-container-inside'>
                            <div id='dash-contact-container-inside-header'>
                                <h1 id="dash-contact-modal-form-h1">Add Contact</h1>
                                <h2 onClick={() => { setModalOpen(false) }}>X</h2>
                            </div>
                            <form id='dash-contact-modal-form' onSubmit={addNewContact}>
                                <TextField ref={ref1} label="Type name..." variant="outlined" onChange={(e) => { setNewContact({ ...newContact, name: e.target.value }) }} placeholder="Contact name..." />
                                <TextField ref={ref2} label="Type job..." variant="outlined" onChange={(e) => { setNewContact({ ...newContact, job: e.target.value }) }} placeholder="Contact job..." />
                                <TextField ref={ref3} type="number" label="Type number..." variant="outlined" onChange={(e) => { setNewContact({ ...newContact, number: e.target.value }) }} placeholder="Phone number..." />
                                <TextField ref={ref4} label="Type message..." variant="outlined" onChange={(e) => { setNewContact({ ...newContact, message: e.target.value }) }} placeholder="Text..." />
                                <button type='submit'>
                                    Add Contact
                                </button>
                            </form>
                        </div>
                    </div>
                    <div id='bottom-contact-container-main'>
                        {contacts.map((contact, index) => {
                            return (
                                <div
                                    id='bottom-contact-container-user'>
                                    <div id='bottom-contact-container-user-left'
                                        key={index}
                                    >
                                        <div id='bottom-contact-container-user-left-div'>

                                        </div>
                                        <div id='bottom-contact-container-user-left-text'>
                                            <h4>{contact.name}</h4>
                                            <p>{contact.job}</p>
                                        </div>
                                    </div>
                                    <div id='bottom-contact-container-user-right'>
                                        <div id='bottom-contact-container-user-right-first'>
                                            <a href="tel:+998941744904">
                                                <img src={phone} alt="" />
                                            </a>
                                        </div>
                                        <div id='bottom-contact-container-user-right-second'>
                                            <img src={message} alt="" />
                                        </div>
                                        <div id='bottom-contact-container-user-right-third'>
                                            <DeleteIcon />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <button id='bottom-contact-btn'>View More</button>
                </div>
                <div id='bottom-message-container'>
                    <div id='bottom-contact-container-header'>
                        <div id='bottom-contact-container-left'>
                            <h2>Message</h2>
                            <p>You have <span>{contactLength}</span> contacts</p>
                        </div>
                        <div id='bottom-message-container-right'>
                            <a href=''>View All</a>
                        </div>
                    </div>
                    {contacts.map((contact) => {
                        return (
                            <div id='bottom-message-container-main'>
                                <div id="bottom-contact-container-user">
                                    <div id='bottom-contact-container-user-left'>
                                        <div id='bottom-contact-container-user-left-div'>
                                        </div>
                                        <div id='bottom-contact-container-user-left-text'>
                                            <h4>{contact.name}</h4>
                                            <p>{contact.message}</p>
                                        </div>
                                    </div>
                                    <div id='bottom-message-container-main-user-right'>
                                        <button>46</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div id="bottom-message-container-footer">
                        <button>View More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
