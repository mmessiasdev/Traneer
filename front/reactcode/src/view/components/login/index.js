import { useState } from "react";
import { Box, IconButton, TextField } from "@mui/material";
import authApi from "../../../controller/auth/authApi";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../../controller/auth/context/authContext";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const LoginComponent = () => {
    const history = useNavigate();

    const [credentials, setCredentials] = useState({
        identifier: "",
        password: ""
    });


    const { setIsAuthenticated } = useContext(AuthContext);

    const handleChange = ({ currentTarget }) => {
        console.log(currentTarget)
        const { value, name } = currentTarget
        console.log(credentials);
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await authApi.authenticate(credentials);
            setIsAuthenticated(true);
            history('/home');
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>

                <form onSubmit={handleSubmit}>
                    <Box sx={{ maxWidth: "500px", height: "400px", bgcolor: "primary.main", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "100px", borderRadius: "10px", flexDirection: "column" }}>
                        <TextField focused variant="filled" color='secondary' fullWidth={true} size="small" id="identifier" label="Email" type="text" name="identifier" onChange={handleChange}></TextField>
                        <TextField fullWidth={true} focused color='secondary' size="small" id="password" variant="filled" label="Senha" type="password" name="password" onChange={handleChange}></TextField>
                        <IconButton size="large" type="submit" color="secondary">
                            <ArrowForwardIosIcon/>
                        </IconButton>

                    </Box>
                </form>
        </>
    )
}

export default LoginComponent;