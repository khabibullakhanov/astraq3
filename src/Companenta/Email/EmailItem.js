import React from 'react'
import skripka from "../../Assets/Icons/Skripka.svg"
import yellowStar from "../../Assets/Icons/Yellow Star.svg"
import { Checkbox } from "@mui/material";

import { useSnackbar } from 'notistack'
import { useDispatch } from "react-redux";
import { acDeleteCrud, acUpdateCrud } from "../../Redux/CRUD";


export function EmailItem({ users }) {
    const dispatch = useDispatch();

    const { enqueueSnackbar } = useSnackbar()

   

    return (

      <>
      </>
    )
}
