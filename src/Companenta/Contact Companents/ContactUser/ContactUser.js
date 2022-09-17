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
import { useSnackbar } from 'notistack'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { acLoading } from '../../../Redux/Loading'

export function ContactUser() {
    const { enqueueSnackbar } = useSnackbar();
    const contacts = useSelector((state) => state.crud);
    const dispatch = useDispatch();

    const [row, setRow] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [newContact, setNewContact] = useState([])
    const [value, setValue] = useState([])
    const [typeHendelSubmit, setTypeHendelSubmit] = useState("Add");

    const rowTodo = () => {
        setRow(true)
    }

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(contacts));
    }, [contacts]);

    const addNewContact = (e) => {
        e.preventDefault();
        setTimeout(() => {
            dispatch(acLoading(true));
        }, "1")
        setTimeout(() => {
            dispatch(acLoading(false));
        }, "1500")
        if (typeHendelSubmit === "Add") {
            setModalOpen(false)
            const hozirgi = new Date().getTime()
            const newContacts = {
                id: hozirgi,
                contactsName: e.target.name.value,
                contactsWork: e.target.work.value,
                contactsCompany: e.target.company.value,
                contactsPhone: e.target.phone.value,
                contactsMessage: e.target.email.value,
            }
            dispatch(acAddCrud(newContacts))
        } else {
            dispatch(acUpdateCrud(value));
            setTypeHendelSubmit("Add")
            setModalOpen(false);
            setTimeout(() => {
                dispatch(acLoading(true));
            }, "1")
            setTimeout(() => {
                dispatch(acLoading(false));
            }, "1500")
            enqueueSnackbar(`${value.contactsName} successfully edited`, {
                autoHideDuration: "2000",
                variant: "success",
            });
        }
        setValue({ contactsName: "", contactsWork: "", contactsCompany: "", contactsPhone: "", contactsMessage: "", })

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
                        <TextField required value={value.contactsName} name='name' label="Type name..." variant="outlined" onChange={(e) => { setValue({ ...value, contactsName: e.target.value }) }} placeholder="Contact name..." />
                        <TextField required value={value.contactsWork} name='work' label="Type job..." variant="outlined" onChange={(e) => { setValue({ ...value, contactsWork: e.target.value }) }} placeholder="Contact job..." />
                        <TextField required value={value.contactsCompany} name='company' label="Type company..." variant='outlined' onChange={(e) => { setValue({ ...value, contactsCompany: e.target.value }) }} placeholder="Contact company..." />
                        <TextField required value={value.contactsPhone} name='phone' label="Type phone..." variant="outlined" onChange={(e) => { setValue({ ...value, contactsPhone: e.target.value }) }} placeholder="Phone number..." />
                        <TextField required value={value.contactsMessage} name='email' label="Type email..." variant="outlined" onChange={(e) => { setValue({ ...value, contactsMessage: e.target.value }) }} placeholder="Contact email..." />
                        <button type='submit'>
                            {typeHendelSubmit}
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
                                <div style={{ display: "flex", marginLeft: "-10px" }}>
                                    <div id="user-email">
                                        <IconButton>
                                            <DeleteIcon
                                                style={{ color: "#5149E4", fontSize: "25px" }}
                                                onClick={() => {
                                                    dispatch(acDeleteCrud(item.id))
                                                    enqueueSnackbar(`${item.contactsName} successfully deleted`, {
                                                        autoHideDuration: "2000",
                                                        variant: "success",
                                                    });
                                                }}
                                            />
                                        </IconButton>
                                    </div>
                                    <div id="user-email">
                                        <IconButton
                                            onClick={() => {
                                                setValue(item)
                                                setModalOpen(true);
                                                setTypeHendelSubmit("Edit");
                                            }}
                                        >
                                            <EditIcon style={{ color: "#5149E4", fontSize: "25px" }} />
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

