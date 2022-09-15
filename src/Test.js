import React, { useEffect, useState } from "react";
import "../Assets/css/Home.css";
import dashlog1 from "../Assets/icons/dash1.svg";
import dashlog2 from "../Assets/icons/dash2.svg";
import dashlog3 from "../Assets/icons/dash3.svg";
import dashlog4 from "../Assets/icons/dash4.svg";
import dollar from "../Assets/icons/dollar.svg";
import foyiz from "../Assets/icons/foyiz.svg";
import placeholder from "../Assets/ContactIcons/placeholder.svg"

import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import NumberFormat from "react-number-format";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';


import { useDispatch, useSelector } from "react-redux";
import { acAddCrud, acDeleteCrud } from "../Redux/Add";


import { Diagramma } from "../components/Diagramma";
import { Chiziqdiagramma } from "../components/chiziqdiagramma";
import { FoyizDiagramma } from "../components/FoyizDiagramma";
import { RghtPage } from "../components/RghtComponent";


export function Home() {

    const dispatch = useDispatch();
    const users = useSelector((state) => state.crud);


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);





    const hendelSubmit = (e) => {
        e.preventDefault()
        const NowDate = new Date().getTime()
        const newUser = {
            id: NowDate,
            name: e.target.name.value,
            usernameeee: e.target.Username.value,
            number: e.target.number.value,
        };

        dispatch(acAddCrud(newUser))
        e.target.name.value = ""
        e.target.Username.value = ""
        e.target.number.value = ""
        setOpen(false)
    }



    return (
        <div className="Home">
            <div className="homichkiushla">
                <div className="homleft">
                    <div className="homleftcard">
                        <div className="dasbordkard">
                            <div className="dashcard">
                                <img src={dashlog1} alt="" />
                                <div className="prisedash">
                                    <p>Projects</p>
                                    <b>932</b>
                                </div>
                            </div>
                            <div className="dashcard">
                                <img src={dashlog2} alt="" />
                                <div className="prisedash">
                                    <p>Projects</p>
                                    <b>932</b>
                                </div>
                            </div>
                            <div className="dashcard">
                                <img src={dashlog3} alt="" />
                                <div className="prisedash">
                                    <p>Projects</p>
                                    <b>932</b>
                                </div>
                            </div>
                            <div className="dashcard">
                                <img src={dashlog4} alt="" />
                                <div className="prisedash">
                                    <p>Projects</p>
                                    <b>932</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="kokdiag">
                        <Diagramma />
                    </div>

                    <div className="aylanadiagramma">
                        <div className="navVAayushla">
                            <div className="aylananav">
                                <b>Pie Chart</b>
                                <span>
                                    <label>
                                        <input type="checkbox" />
                                        <p>Chart</p>
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        <p>Chart</p>
                                    </label>
                                </span>
                            </div>
                            <div className="aylana">
                                <FoyizDiagramma />
                                <FoyizDiagramma />
                                <FoyizDiagramma />
                            </div>
                        </div>
                        <div className="aychiziq">
                            <Chiziqdiagramma />
                        </div>
                    </div>
                    <div className="dollar">
                        <div className="dollar1">
                            <div className="dollar1top">
                                <img src={dollar} alt="" />
                            </div>
                            <div className="dollar1left">
                                <p>Total Balance</p> <br />
                                <b>$ 40.123</b>
                            </div>
                            <div className="dollar1rght">
                                <p>Average from last month</p> <br />
                                <p>+0,5% invoices sent</p>
                            </div>
                        </div>
                        <div className="dollar2">
                            <div className="dollar2top">
                                <img src={foyiz} alt="" />
                            </div>
                            <div className="dollar1left">
                                <p>Total Balance</p> <br />
                                <b>$ 40.123</b>
                            </div>
                            <div className="dollar1rght">
                                <p>Average from last month</p> <br />
                                <p>+0,5% invoices sent</p>
                            </div>
                        </div>
                        <div className="dollar3">
                            <div className="dollar2top">
                                <img src={foyiz} alt="" />
                            </div>
                            <div className="dollar1left">
                                <p>Total Balance</p> <br />
                                <b>$ 40.123</b>
                            </div>
                            <div className="dollar3rght">
                                <p>Average from last month</p> <br />
                                <p>+0,5% invoices sent</p>
                            </div>
                        </div>
                    </div>


                    <div className="hometel">
                        <div className="telCaqrd">
                            <div className="telnav">
                                <div className="telnavleft">
                                    <h1>Contacts</h1>
                                    <p>You have {users.length} contacts</p>
                                </div>
                                <div className="telnavrght">
                                    <Button onClick={handleOpen}>

                                        <AddIcon sx={{
                                            color: "#ccc"
                                        }} />

                                    </Button>
                                    <Modal

                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <div className="modal">
                                            <form onSubmit={hendelSubmit}>

                                                <TextField id="outlined-basic" label="Name..." variant="outlined"
                                                    name="name"
                                                    autoComplete="off"
                                                    style={Mystyle.addinput}
                                                    onClick={() => {
                                                        if (users.name !== "") {
                                                            console.log(users.name);
                                                        } else {
                                                            alert("feadc");
                                                        }
                                                    }}

                                                />
                                                <TextField id="outlinedbasc" label="Username..." variant="outlined"
                                                    name="Username"
                                                    autoComplete="off"
                                                    style={Mystyle.addinput}

                                                />
                                                <NumberFormat
                                                    name="number"
                                                    autoComplete="off"
                                                    format="+998 (##) ### ####"
                                                    placeholder="+998 (##) ### ####"
                                                    thousandSeparator={true} />

                                                <Button
                                                    type="submit">Add</Button>
                                            </form>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                            <div className="telcontent">
                                {users.map((user) => {
                                    return (
                                        <div className="telcon" key={user.id}>
                                            <div className="profil">
                                                <img src={placeholder} alt="" />
                                                <div className="proname">
                                                    <b>{user.name || "no name"}</b>
                                                    <p>{user.usernameeee || "no username"}</p>

                                                </div>
                                            </div>
                                            <div className="telVssms">

                                                <PhoneIcon
                                                    color="success"
                                                    fontSize="large"
                                                    style={Mystyle.crs2}
                                                    onClick={(() => {

                                                        if (user.number === "") {
                                                            alert("raqam kritilmagan");
                                                        } else {
                                                            alert(user.number);
                                                        }
                                                    })}
                                                />
                                                <DeleteIcon
                                                    color="error"
                                                    fontSize="large"
                                                    style={Mystyle.crs}
                                                    onClick={() => {
                                                        dispatch(acDeleteCrud(user.id))
                                                    }} />

                                                <IconButton
                                                    color="warning"
                                                >

                                                </IconButton>
                                            </div>
                                        </div>
                                    )
                                })}


                            </div>

                        </div>
                    </div>
                </div>
                <div className="homrght">
                    <RghtPage />
                    <div className="activie">
                        <div className="ACTIVECHIZIQ">
                            <div className="tortbur"></div>
                            <div className="tortburChiziq"></div>
                            <div className="tortbur"></div>
                            <div className="tortburChiziq"></div>
                            <div className="tortbur"></div>
                            <div className="tortburChiziq"></div>
                            <div className="tortbur"></div>
                            <div className="tortburChiziq"></div>
                            <div className="tortbur"></div>
                        </div>
                        <div className="ACTIVETEXT">
                            <div className="sssssssssssssss">
                                <p className="activetextdiv">
                                    <b>Transaction Assets</b>
                                    <p>2 Hour Ago</p> <br />
                                </p>{" "}
                                <p className="textactive">
                                    Ab architecto provident ex accusantium deserunt. b nb nbv b v
                                    b bn
                                </p>
                            </div>
                            <div className="sssssssssssssss">
                                <p className="activetextdiv">
                                    <b>Transaction Assets</b>
                                    <p>2 Hour Ago</p> <br />
                                </p>{" "}
                                <p className="textactive">
                                    Ab architecto provident ex accusantium deserunt. b nb nbv b v
                                    b bn
                                </p>
                            </div>
                            <div className="sssssssssssssss">
                                <p className="activetextdiv">
                                    <b>Transaction Assets</b>
                                    <p>2 Hour Ago</p> <br />
                                </p>{" "}
                                <p className="textactive">
                                    Ab architecto provident ex accusantium deserunt. b nb nbv b v
                                    b bn
                                </p>
                            </div>
                            <div className="sssssssssssssss">
                                <p className="activetextdiv">
                                    <b>Transaction Assets</b>
                                    <p>2 Hour Ago</p> <br />
                                </p>{" "}
                                <p className="textactive">
                                    Ab architecto provident ex accusantium deserunt. b nb nbv b v
                                    b bn
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}