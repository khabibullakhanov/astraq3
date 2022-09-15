import React, { useState, useEffect } from 'react'
import "./DashboardRightCard.css"
import star from "../../../Assets/Icons/Alone Star.svg"
import Greystar from "../../../Assets/Icons/Alone Grey Star.svg"
import { Checkbox } from "@mui/material";
import { useSnackbar } from 'notistack'

export function DashboardRightCard({ users }) {
    const { enqueueSnackbar } = useSnackbar()



    return (
        <div id="dashboard-right-card-main-container">
            {users.map((user, index) => {
                return (
                    <div key={index} id='card-container'>
                        <div id='card-container-header'>
                            <div id='card-container-header-box'>

                            </div>
                            <div id='card-container-header-text'>
                                <h3>{user.name}</h3>
                                <div id='card-container-header-star'>
                                <Checkbox icon={<img src={star} />} checkedIcon={<img src={Greystar} />} />
                                <Checkbox icon={<img src={star} />} checkedIcon={<img src={Greystar} />} />
                                <Checkbox icon={<img src={star} />} checkedIcon={<img src={Greystar} />} />
                                <Checkbox icon={<img src={star} />} checkedIcon={<img src={Greystar} />} />
                                <Checkbox icon={<img src={Greystar} />} checkedIcon={<img src={star} />} />
                                </div>
                            </div>
                        </div>
                        <p>{user.message}</p>
                        <div id='card-container-bottom'>
                            <a href=""
                                // onClick={achive}
                                onClick={(e) => {
                                    e.preventDefault()
                                    enqueueSnackbar(`${user.name}'s message 📤 successfully deleted ❌`, {
                                        autoHideDuration: "2000",
                                        variant: "error",
                                    });
                                }}
                            >
                                Achive
                            </a>
                            <a href="" onClick={(e) => {
                                e.preventDefault()
                                enqueueSnackbar(`${user.name}'s message received 🥳`, {
                                    autoHideDuration: "2000",
                                    variant: "success",
                                });
                            }}
                            >
                                Accept
                            </a>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

