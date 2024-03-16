import React, { useState } from "react";
import { Container, ContainerPrimColor } from "../../../widgets/container";
import { PrimaryInput } from "../../style/input/style";
import BaseText from "../typograph";
import { PrimaryButtom } from "../../style/butons/style";
import { Button, TextField } from "@mui/material";
import authApi from "../../../../controller/authApi";

const LoginPage = () => {
    const [credentials, setCredentials] = useState({
        identifier: "",
        password: ""
    });

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
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <Container width="100%" height="100vh" disp="flex" justify="center" aligh="center">
                <BaseText tag="h1">Faça Login</BaseText>
                <Container width="100px"></Container>
                <form onSubmit={handleSubmit}>
                    <ContainerPrimColor width="600px" height="400px" disp="flex" direc="column" justify="center" aligh="start" pad="75px 150px" radius="30px">
                        <TextField fullWidth="true" size="small" id="identifier" label="Email" type="text" name="identifier" onChange={handleChange}></TextField>
                        <Container height="15px"></Container>
                        <TextField fullWidth="true" size="small" id="password" label="Senha" type="password" name="password" onChange={handleChange}></TextField>
                        <Container height="25px"></Container>
                        <Button variant="conteined" type="submit">Entre</Button>
                    </ContainerPrimColor>
                </form>
            </Container>
        </>
    )
}

export default LoginPage;