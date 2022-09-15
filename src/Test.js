import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    CardActions,
    IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { acAddCrud, acDeleteCrud, acUpdateCrud } from "./Redux/CRUD";
import { useSnackbar } from "notistack";

export function Test() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.crud);
    const { enqueueSnackbar } = useSnackbar();
    const [typeHendelSubmit, setTypeHendelSubmit] = useState("Add");
    const [value, setValue] = useState({ name: "" });

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    const hendelSubmit = (e) => {
        e.preventDefault();
        if (typeHendelSubmit === "Add") {
            const nowDate = new Date().getTime();
            const newUser = {
                id: nowDate,
                name: value.name,
            };
            dispatch(acAddCrud(newUser));
            enqueueSnackbar(`Welcome ${value.name}`, { variant: "success" });
        } else {
            dispatch(acUpdateCrud(value));
            setTypeHendelSubmit("Add");
        }

        setValue({ name: "" });
    };

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Typography variant="h4" textAlign="center">
                CRUD ReactJS + React + Material UI
            </Typography>

            <Box
                sx={{
                    width: "400px",
                    height: "500px",
                    backgroundColor: "aliceblue",
                    marginTop: "3%",
                    overflow: "hidden",
                    padding: "1%",
                }}
            >
                <Box
                    component="form"
                    sx={{
                        width: "100%",
                        height: "55px",
                        display: "flex",
                        flexDirection: "row",
                    }}
                    onSubmit={hendelSubmit}
                    autoComplete="off"
                >
                    <TextField
                        id="standard-basic"
                        required
                        label="Ismingiz"
                        variant="outlined"
                        sx={{
                            width: "calc(100% - 90px)",
                            height: "100%",
                        }}
                        value={value.name}
                        onChange={(e) => {
                            setValue({ ...value, name: e.target.value });
                        }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            width: "90px",
                            fontSize: "1.2rem",
                        }}
                        type="submit"
                    >
                        {typeHendelSubmit}
                    </Button>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        height: "calc(100% - 55px)",
                        overflowY: "auto",
                    }}
                >
                    {users.map((user) => {
                        return (
                            <Box
                                key={user.id}
                                sx={{
                                    width: "100%",
                                    height: "55px",
                                    marginTop: "5px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "0 3%",
                                    borderBottom: "1px solid #ccc",
                                }}
                            >
                                <Typography variant="h6" textAlign="start" color="primary">
                                    {user.name}
                                </Typography>


                                <CardActions>
                                    <IconButton
                                        color="warning"
                                        onClick={() => {
                                            dispatch(acDeleteCrud(user.id));
                                            enqueueSnackbar(`${user.name} deleted`, {
                                                variant: "warning",
                                            });
                                        }}
                                    >
                                        <DeleteIcon fonsize="large" />
                                    </IconButton>
                                    <IconButton
                                        color="primary"
                                        onClick={() => {
                                            setTypeHendelSubmit("Edit");
                                            setValue(user);
                                        }}
                                    >
                                        <EditIcon fonsize="large" />
                                    </IconButton>
                                </CardActions>
                            </Box>
                        );
                    })}
                </Box>
            </Box>
        </Box>
    );
}