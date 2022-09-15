import React, { useState, useEffect, useRef } from 'react'
import { KanbanNavbar } from '../../Companenta/Kanban/KanbanNavbar'
import { KanbanUserCard } from '../../Companenta/Kanban/KanbanUserCard'
import "./Kanban.css"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import userIcon from "../../Assets/Icons/user Icon.svg"
import { Header } from "../../Companenta/Header/Header"
import { KanbanUsersData } from '../../Companenta/Data/KanbanUsersData';
import team from "../../Assets/Icons/Team.svg"
import skripka from "../../Assets/Icons/Skripka.svg"
import chatLogo from "../../Assets/Icons/Chat logo.svg"
import TextField from '@mui/material/TextField';
import greyStar from "../../Assets/Icons/Grey Star.svg"
import yellowStar from "../../Assets/Icons/Yellow Star.svg"
import { Checkbox } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { useSnackbar } from 'notistack';


export function Kanban() {
    const { enqueueSnackbar } = useSnackbar()
    const [modalOpen, setModalOpen] = useState(false)
    const [user, setUser] = useState([]);
    const [newProject, setNewProject] = useState([])
    const [deleteItems, setDeleteItems] = useState(false)
    const [remove, setRemove] = useState(false)
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const ref7 = useRef(null);

    useEffect(() => {
        KanbanUsersData()
            .then((data) => {
                setUser(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const cart = JSON.parse(localStorage.getItem("yangiProjekt") || "[]")
    localStorage.setItem("yangiProjektLength", JSON.stringify(user.length))
    const addNewContact = (e) => {
        e.preventDefault();
        setModalOpen(false)
        localStorage.setItem("yangiProjekt", JSON.stringify([...cart, newProject]))
        ref1.current.value = '';
        ref2.current.value = '';
        ref3.current.value = '';
        ref4.current.value = '';
        ref5.current.value = '';
        ref6.current.value = '';
        ref7.current.value = '';
        enqueueSnackbar("Project successfully saved", {
            autoHideDuration: "2000",
            variant: "success",
        });
    }

    const yangiProjects = cart.concat(user)

    const data = [
        '#6263',
        '#BF3325',
        '#BF3312',
        '#D82E2F',
        '#ED4B',
        '#EF5354',
        '#B61B',
        '#E6425E',
        '#839',
        '#B9A'
    ]

    const editKanbanItems = () => {
        setDeleteItems(true)
    }

    const saveKanbanItems = () => {
        setDeleteItems(false)
        enqueueSnackbar("Items successfully saved", {
            autoHideDuration: "2000",
            variant: "success",
        });
    }

    const deleteItemKanban = () => {
        setRemove(true)
    //    const newList = yangiProjects.filter((l) => l.id !)
    } 

    return (
        <div id='kanban-main-container'>
            <div id='kanban-main-container-header-text'>
                <Header />
                <h1>Kanban</h1>
            </div>
            <div id='kanban-project-board-container'>
                <div id='kanban-project-board-container-left'>
                    <div>
                        <h2>Project #1  Board</h2>
                    </div>
                    <div id="kanban-star-content">
                        <button>
                            <Checkbox icon={<img src={greyStar} />} checkedIcon={<img src={yellowStar} />} />
                        </button>
                    </div>
                    <div id='kanban-grey-div-container'>
                        <button id='kanban-grey-div'>

                        </button>
                        <button id='kanban-grey-div'>

                        </button>
                        <button id='kanban-grey-div'>

                        </button>
                        <button id='kanban-purple-div'>
                            <p>5+</p>
                        </button>
                    </div>
                    <div id="kanban-invite-people-container">
                        <button>
                            <img src={userIcon} alt="" />
                            <p>Invite People</p>
                        </button>
                    </div>
                    <div id='kanban-private-content'>
                        <button>Private</button>
                    </div>
                    <div id="kanban-edite-content">
                        <button onClick={editKanbanItems}>Edit</button>
                    </div>
                    <div id="kanban-save-content" style={deleteItems ? { display: "block" } : { display: "none" }} onClick={saveKanbanItems}>
                        <button>Save</button>
                    </div>
                </div>
                <div id='kanban-project-board-container-right' onClick={() => { setModalOpen(true) }}>
                    <button>New Project <span>+</span></button>
                </div>
            </div>
            <div id='message-modal-container' style={modalOpen ? { display: "block", textAlign: "center" } : { display: "none" }}>
                <div id='dash-contact-container-inside'>
                    <div id='dash-contact-container-inside-header'>
                        <h1 id="dash-contact-modal-form-h1">Add Project</h1>
                        <h2 onClick={() => { setModalOpen(false) }}>X</h2>
                    </div>
                    <form id='dash-contact-modal-form' onSubmit={addNewContact}>
                        <TextField required ref={ref1} label="Type name..." variant="outlined" onChange={(e) => { setNewProject({ ...newProject, name: e.target.value }) }} placeholder="Contact name..." />
                        <TextField required ref={ref2} label="Type job..." variant="outlined" onChange={(e) => { setNewProject({ ...newProject, work: e.target.value }) }} placeholder="Contact job..." />
                        <TextField required ref={ref3} type="number" label="Type progress percent..." variant="outlined" onChange={(e) => { setNewProject({ ...newProject, progressLength: e.target.value }) }} placeholder="Phone number..." />
                        <TextField required ref={ref4} type="text" label="Type team members..." variant="outlined" onChange={(e) => { setNewProject({ ...newProject, team: e.target.value }) }} placeholder="Phone number..." />
                        <TextField required ref={ref5} type="number" label="Type projects..." variant="outlined" onChange={(e) => { setNewProject({ ...newProject, skripka: e.target.value }) }} placeholder="Phone number..." />
                        <TextField required ref={ref6} label="Type message..." variant="outlined" onChange={(e) => { setNewProject({ ...newProject, message: e.target.value }) }} placeholder="Text..." />
                        <TextField required ref={ref7} type="color" label="Choose color..." variant="outlined" onChange={(e) => { setNewProject({ ...newProject, color: e.target.value }) }} placeholder="Text..." />
                        <button type='submit'>
                            Add Contact
                        </button>
                    </form>
                </div>
            </div>
            <div>
                <KanbanNavbar />
                <div id='kanban-user-main-container'>
                    {yangiProjects.map((item, index) => {
                        const colors = item.color
                        const width = item.progressLength + "%"
                        console.log(colors);
                        return (
                            <div style={remove ?{ display: "none"}:{display: "block" }} id='kanbar-user-card-content'>
                                <div id='kanbar-user-card-content-left'>
                                    <div id='kanbar-user-card-content-left-div'>
                                    </div>
                                    <h3>{item.name}</h3>
                                    <p>{item.work}</p>
                                </div>
                                <div id='kanbar-user-card-content-right'>
                                    <div id='kanbar-user-card-content-right-progress-text'>
                                        <p>Progress</p>
                                        <p>{item.progressLength}</p>
                                    </div>
                                    <div className="w3-light-grey w3-round-xlarge">
                                        <div className="w3-container w3-round-xlarge" style={{
                                            backgroundColor: colors, width: width, paddingBlock: "6px",
                                        }}></div>
                                    </div>
                                    <div id='kanbar-user-card-content-right-icons'>
                                        <img src={team} alt="" />
                                        <p>{item.team}</p>
                                        <img src={skripka} alt="" />
                                        <p>{item.skripka}</p>
                                        <img src={chatLogo} alt="" />
                                        <p>{item.message}</p>
                                    </div>
                                    <h2 onClick={deleteItemKanban} style={deleteItems ? { display: "block" } : { display: "none" }}><ClearIcon /></h2>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
