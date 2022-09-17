import React, { useState, useEffect, useRef } from 'react'
import "./Banking.css"
import { Header } from "../../Companenta/Header/Header"
import kokSt from "../../Assets/Images/Blue Statistics Banking.png"
import pushtiSt from "../../Assets/Images/Pink Statistics Banking.png"
import bankingSt from "../../Assets/Images/Bankking Statistics.png"
import topIcon from "../../Assets/Icons/Up.svg"
import downIcon from "../../Assets/Icons/Down.svg"
import printer from "../../Assets/Icons/Printer.svg"
import download from "../../Assets/Icons/Download.svg"
import { BankingCard } from '../../Companenta/BankingBottomCard/BankingCard'
import { BnkingData } from '../../Companenta/Data/BankingData'
import { BankingPagination } from '../../Companenta/BankingBottomCard/BankingPagination'
import creditCard from "../../Assets/Images/Credit Card.png"
import sendImg from "../../Assets/Icons/Send Logo.svg"
import blueRectangle from "../../Assets/Icons/Siyohrang Tortburchak.svg"
import uchNuqta from "../../Assets/Icons/3 nuqta.svg"
import malumotlar from "./BankinfUsers.txt"
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSnackbar } from 'notistack'
import { useDispatch, useSelector } from "react-redux";
import { acAddCrud, acDeleteCrud, acUpdateCrud } from "../../Redux/CRUD";
import { acLoading } from "../../Redux/Loading";
import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';


export function Banking() {
    const dispatch = useDispatch();
    const bankingUsers = useSelector((state) => state.crud);

    const { enqueueSnackbar } = useSnackbar()
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setpostsPerPage] = useState(8)
    const [modalOpen, setModalOpen] = useState(false)
    const [cards, setCards] = useState([])
    const [value, setValue] = useState([])
    const [typeHendelSubmit, setTypeHendelSubmit] = useState("Add");

    useEffect(() => {
        BnkingData()
            .then((data) => {
                setUsers(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(bankingUsers));
    }, [bankingUsers]);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentUsers = users.slice(firstPostIndex, lastPostIndex);

    const cart = JSON.parse(localStorage.getItem("yangiCardlar") || "[]")
    localStorage.setItem("yangiCardlarLength", JSON.stringify(users.length))
    const submitCards = (e) => {
        e.preventDefault();
        setTimeout(() => {
            dispatch(acLoading(true));
        }, "1")
        setTimeout(() => {
            dispatch(acLoading(false));
        }, "1500")
        if (typeHendelSubmit === "Add") {
            setModalOpen(false)
            const NowDate = new Date().getTime()
            const newBankingUser = {
                id: NowDate,
                bankingUserName: e.target.name.value,
            };
            dispatch(acAddCrud(newBankingUser))
            enqueueSnackbar(`${value.name} successfully added`, {
                autoHideDuration: "2000",
                variant: "success",
            });
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
            enqueueSnackbar(`${value.bankingUserName} successfully edited`, {
                autoHideDuration: "2000",
                variant: "success",
            });
        }

        enqueueSnackbar("User successfully added", {
            autoHideDuration: "2000",
            variant: "success",
        });
        setValue({ bankingUserName: "", bankingMoney: "" })
    }

    return (
        <div id="banking-main-container">
            <div id='banking-main-container-left'>
                <div>
                    <Header />
                </div>
                <div>
                    <h1 id='font-weight-600'>Banking</h1>
                </div>
                <div id='banking-main-container-left-main'>
                    <div id='banking-main-container-left-main-top'>
                        <div id="banking-main-container-left-main-top-main">
                            <div id='banking-main-container-left-main-top-header'>
                                <h2>Profit</h2>
                                <div>
                                    <select>
                                        <option>Weekly</option>
                                        <option>Daily</option>
                                        <option>Hourly</option>
                                        <option>Minutly</option>
                                    </select>
                                </div>
                            </div>
                            <div id="banking-main-container-left-main-top-main-inside">
                                <div id="banking-main-container-left-main-top-main-left">
                                    <div id="banking-main-container-left-main-top-main-left-inside">
                                        <div id='banking-main-container-main-top-main-left-inside-text'>
                                            <p id='grey-color'>Income</p>
                                            <h1 id='font-weight-600'>$72,890,00</h1>
                                            <div id="banking-main-container-left-main-top-main-left-inside-icon-div">
                                                <img src={topIcon} alt="" />
                                                <p id="green-color-banking">+15%</p>
                                            </div>
                                        </div>
                                        <div>
                                            <img src={kokSt} alt="" />
                                        </div>
                                    </div>
                                    <div id="banking-main-container-left-main-top-main-left-inside">
                                        <div id='banking-main-container-main-top-main-left-inside-text'>
                                            <p id='grey-color'>Income</p>
                                            <h1 id='font-weight-600'>$72,890,00</h1>
                                            <div id="banking-main-container-left-main-top-main-left-inside-icon-div">
                                                <img src={downIcon} alt="" />
                                                <p id="pink-color-banking">-15%</p>
                                            </div>
                                        </div>
                                        <div>
                                            <img src={pushtiSt} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div id="banking-main-container-left-main-top-main-right">
                                    <img src={bankingSt} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='banking-main-container-left-main-bottom'>
                        <div id='banking-main-container-left-main-bottom-header'>
                            <h2 id="font-weight-600">Lastest Transaction</h2>
                            <div id='banking-main-container-left-main-bottom-header-right'>
                                <div id='banking-main-container-left-main-bottom-header-right-select'>
                                    <select>
                                        <option>Newest</option>
                                        <option>Newer</option>
                                        <option>Oldest</option>
                                        <option>Older</option>
                                    </select>
                                </div>
                                <div id='border-grey'>
                                    <img src={printer} alt="" />
                                </div>
                                <div id='border-grey'>
                                    <a href={malumotlar} download={malumotlar}>
                                        <img src={download} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id='banking-main-container-left-main-bottom-main'>
                            <BankingCard users={currentUsers} />
                            <BankingPagination
                                totalPosts={users.length}
                                setCurrentPage={setCurrentPage}
                                postsPerPage={postsPerPage}
                                currentPage={currentPage}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div id="banking-main-container-right">
                <h1 id='banking-right-container-text'>My Card</h1>
                <div>
                    <div id='banking-main-container-right-credit-container'>
                        <img id='banking-credit-card-img' src={creditCard} alt="" />
                        <button>+ Add new card</button>
                    </div>
                    <div id='banking-main-container-right-transfer-container'>
                        <h2 id="banking-right-container-text">Quick Transfer</h2>
                        <div id='banking-main-container-right-transfer-container-inside'>
                            <div id='banking-main-container-right-transfer-container-inside-divs-container'>
                                {
                                    bankingUsers.map((item, index) => {
                                        return (
                                            <div id='banking-right-grey-div'>

                                                <div id='banking-right-grey-background'>
                                                </div>
                                                <div style={{ textAlign: "center" }}>
                                                    <h6 id='font-weight-600'>{item.bankingUserName}</h6>
                                                    <IconButton id='bankingEdite' onClick={() => {
                                                        setValue(item)
                                                        setModalOpen(true);
                                                        setTypeHendelSubmit("Edit");
                                                    }}>
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton id='bankingDelete' onClick={() => {
                                                        dispatch(acDeleteCrud(item.id))
                                                        enqueueSnackbar(`${item.bankingUserName} successfully deleted`, {
                                                            autoHideDuration: "2000",
                                                            variant: "success",
                                                        });
                                                    }} >
                                                        <DeleteIcon id="bankingEdite" />
                                                    </IconButton>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                                <div id='bankingright-blue-button-div'>
                                    <button onClick={() => { setModalOpen(true) }}>+</button>
                                </div>
                                <div id='message-modal-container' style={modalOpen ? { display: "block", textAlign: "center" } : { display: "none" }}>
                                    <div id='dash-contact-container-inside'>
                                        <div id='dash-contact-container-inside-header'>
                                            <h1 id="dash-contact-modal-form-h1">Add User</h1>
                                            <h2 onClick={() => { setModalOpen(false) }}>X</h2>
                                        </div>
                                        <form id='dash-contact-modal-form' onSubmit={submitCards}>
                                            <TextField required name='name' value={value.bankingUserName} label="Type name..." variant="outlined" onChange={(e) => { setValue({ ...value, bankingUserName: e.target.value }) }} placeholder="Contact name..." />
                                            <TextField required name='money' value={value.bankingMoney} label="Type amount..." variant="outlined" onChange={(e) => { setValue({ ...value, bankingMoney: e.target.value }) }} placeholder="Type amount..." />
                                            <button type='submit'>
                                                {typeHendelSubmit}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div id='banking-main-container-right-amount-container'>
                                <p id='grey-color'>Amount</p>
                                <input id='font-weight-600' type="number" value={value.bankingMoney} />
                            </div>
                            <button id="banking-right-transfer-comtainer-send">Transfer <img src={sendImg} /></button>
                        </div>
                    </div>
                    <div id='banking-main-container-right-saving-container'>
                        <h2 id="banking-right-container-text">Savings</h2>
                        <div id='banking-main-container-right-progress-div'>
                            <div id='banking-main-container-right-progress-div-header'>
                                <div id='banking-main-container-right-progress-div-header-left'>
                                    <img src={blueRectangle} alt="" />
                                    <p id='font-weight-600'>Buying House</p>
                                </div>
                                <img src={uchNuqta} alt="" />
                            </div>
                            <div className="w3-light-grey w3-round-xlarge">
                                <div className="w3-container w3-round-xlarge" style={{ width: "45%", backgroundColor: "#5149E4", paddingBlock: "6px" }}></div>
                            </div>
                            <div id='banking-main-container-right-progress-div-cost'>
                                <p>1650/</p>
                                <p>%1000</p>
                            </div>
                        </div>
                        <div id='banking-main-container-right-progress-div'>
                            <div id='banking-main-container-right-progress-div-header'>
                                <div id='banking-main-container-right-progress-div-header-left'>
                                    <img src={blueRectangle} alt="" />
                                    <p id='font-weight-600'>Buying House</p>
                                </div>
                                <img src={uchNuqta} alt="" />
                            </div>
                            <div className="w3-light-grey w3-round-xlarge">
                                <div className="w3-container w3-round-xlarge" style={{ width: "45%", backgroundColor: "#5149E4", paddingBlock: "6px" }}></div>
                            </div>
                            <div id='banking-main-container-right-progress-div-cost'>
                                <p>1650/</p>
                                <p>%1000</p>
                            </div>
                        </div>
                        <div id='banking-main-container-right-progress-div'>
                            <div id='banking-main-container-right-progress-div-header'>
                                <div id='banking-main-container-right-progress-div-header-left'>
                                    <img src={blueRectangle} alt="" />
                                    <p id='font-weight-600'>Buying House</p>
                                </div>
                                <img src={uchNuqta} alt="" />
                            </div>
                            <div className="w3-light-grey w3-round-xlarge">
                                <div className="w3-container w3-round-xlarge" style={{ width: "45%", backgroundColor: "#5149E4", paddingBlock: "6px" }}></div>
                            </div>
                            <div id='banking-main-container-right-progress-div-cost'>
                                <p>1650/</p>
                                <p>%1000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
