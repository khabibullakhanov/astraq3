import React, { useState, useEffect, useRef } from 'react'
import "./BottomCards.css"
import message from "../../../Assets/Icons/Message.svg"
import phone from "../../../Assets/Icons/Phone.svg"
import doubleTrue from "../../../Assets/Icons/Pink Double True.svg"
// import { DashboardContacts } from "../../Data/DashboardContacts"
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from "react-redux";
import { acAddCrud, acDeleteCrud, acUpdateCrud } from "../../../Redux/CRUD";
import { useSnackbar } from 'notistack'
import EditIcon from '@mui/icons-material/Edit';


// import NumberFormat from 'react-number-format';
export function BottomCards() {

    const dispatch = useDispatch();
    const dashUser = useSelector((state) => state.crud);
    const { enqueueSnackbar } = useSnackbar()
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const [contacts, setContacts] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [newContact, setNewContact] = useState([])
    const [value, setValue] = useState([])
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(dashUser));
    }, [dashUser]);


    const cart = JSON.parse(localStorage.getItem("yangiContacts") || "[]")
    localStorage.setItem("yangiContactsLength", JSON.stringify(contacts.length))
    const addNewContact = (e) => {
        e.preventDefault();
        setModalOpen(false)
        const NowDate = new Date().getTime()
        const newUser = {
            id: NowDate,
            name: e.target.name.value,
            job: e.target.job.value,
            message: e.target.message.value,
        };

        dispatch(acAddCrud(newUser))
        e.target.name.value = ""
        e.target.job.value = ""
        e.target.message.value = ""
    }


    const contactLength = dashUser.length

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
                                <TextField id="outlined-basic" label="Name..." variant="outlined"
                                    name="name"
                                    required
                                    autoComplete="off"
                                    onClick={() => {
                                        if (dashUser.name !== "") {
                                            console.log(dashUser.name);
                                        } else {
                                            alert("feadc");
                                        }
                                    }}
                                    onChange={(e) => { setValue({ ...value, name: e.target.value }) }}
                                />
                                <TextField
                                required
                                    id="outlinedbasc"
                                    label="Username..."
                                    variant="outlined"
                                    name="job"
                                    autoComplete="off"
                                    onChange={(e) => { setValue({ ...value, job: e.target.value }) }}
                                />
                                <input
                                required
                                    name="message"
                                    autoComplete="off"
                                    format="+998 (##) ### ####"
                                    placeholder="+998 (##) ### ####"
                                    thousandSeparator={true}
                                    onChange={(e) => { setValue({ ...value, message: e.target.value }) }}
                                />

                                <button
                                    type="submit">Add</button>
                            </form>
                        </div>
                    </div>
                    <div id='bottom-contact-container-main'>
                        {dashUser.map((contact, index) => {
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
                                        <div onClick={() => {
                                            dispatch(acDeleteCrud(contact.id))
                                            enqueueSnackbar(`${contact.name} successfully deleted`, {
                                                autoHideDuration: "2000",
                                                variant: "success",
                                            });
                                        }} id='bottom-contact-container-user-right-third'>
                                            <DeleteIcon />
                                        </div>
                                        <div onClick={() => {
                                            dispatch(acUpdateCrud(contact))
                                            enqueueSnackbar(`${contact.name} successfully edited`, {
                                                autoHideDuration: "2000",
                                                variant: "success",
                                            });
                                            setValue(contact)
                                        }} id='bottom-contact-container-user-right-third'>
                                            <EditIcon />
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
                    {dashUser.map((contact) => {
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
                                    <div id='bottom-contact-container-user-right'>
                                    <div id='bottom-message-container-main-user-right'>
                                        <button>46</button>
                                    </div>
                                    <div onClick={() => {
                                            dispatch(acDeleteCrud(contact.id))
                                            enqueueSnackbar(`${contact.name} successfully deleted`, {
                                                autoHideDuration: "2000",
                                                variant: "success",
                                            });
                                        }} id='bottom-contact-container-user-right-third'>
                                            <DeleteIcon />
                                        </div>
                                        <div onClick={() => {
                                            dispatch(acUpdateCrud(contact))
                                            enqueueSnackbar(`${contact.name} successfully edited`, {
                                                autoHideDuration: "2000",
                                                variant: "success",
                                            });
                                            setValue(contact)
                                        }} id='bottom-contact-container-user-right-third'>
                                            <EditIcon />
                                        </div>
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
