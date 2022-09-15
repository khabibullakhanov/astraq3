import React from 'react'
import greyStar from "../../Assets/Icons/Grey Star.svg"
import skripka from "../../Assets/Icons/Skripka.svg"
import yellowStar from "../../Assets/Icons/Yellow Star.svg"
import { Checkbox } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSnackbar } from 'notistack'
import { useDispatch } from "react-redux";
import { acDeleteCrud, acUpdateCrud } from "../../Redux/CRUD";


export function EmailItem({ users }) {
    const dispatch = useDispatch();

    const { enqueueSnackbar } = useSnackbar()

    const y = new Date()
    const hour = y.getMinutes()

    return (

        <div id='emailItem-main-container'>
            {users.map((item, index) => {
                return (
                    <div id='email-main-container-left-inside-right-card-item'>
                        <div id='email-main-container-left-inside-right-card-item-left'></div>
                        <div id='email-main-container-left-inside-right-card-item-right'>
                            <div>
                                <h3 id='font-weight-600'>{item.name}</h3>
                                <p id='email-main-container-left-inside-right-card-item-right-text'>{item.job}</p>
                            </div>
                            <div id='email-main-container-left-inside-right-card-item-right-bottom'>
                                <p id='grey-color'>{hour} min ago</p>
                                <div id='email-main-container-left-inside-right-card-item-right-bottom-inside'>
                                    <Checkbox icon={<img src={greyStar} />} checkedIcon={<img src={yellowStar} />} />
                                    <DeleteIcon style={{ color: "grey" }} onClick={() => {
                                        dispatch(acDeleteCrud(item.id))
                                        enqueueSnackbar(`${item.name} successfully deleted`, {
                                            autoHideDuration: "2000",
                                            variant: "success",
                                        });
                                    }} />
                                    <EditIcon style={{ color: "grey" }} onClick={() => {
                                        dispatch(acUpdateCrud(item.name))
                                        enqueueSnackbar(`${item.name} successfully edited`, {
                                            autoHideDuration: "2000",
                                            variant: "success",
                                        });
                                    }} />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
