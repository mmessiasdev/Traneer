import React from "react";
import { Container, ContainerPrimColor } from "../../../widgets/container";
import { PrimaryInput } from "../../style/input/style";
import BaseText from "../typograph";
import { PrimaryButtom } from "../../style/butons/style";

const LoginPage = () => {
    return (
        <>
            <Container width="100%" height="100vh" disp="flex" justify="center" aligh="center">
                <BaseText tag="h1">Faça Login</BaseText>
                <Container width="100px"></Container>
                <ContainerPrimColor width="600px" height="400px" disp="flex" direc="column" justify="center" aligh="start" pad="75px 100px" radius="30px">
                    <BaseText tag="h4">Email</BaseText>
                    <PrimaryInput></PrimaryInput>
                    <BaseText tag="h4">Senha</BaseText>
                    <PrimaryInput></PrimaryInput>
                    <Container height="50px" />
                    <PrimaryButtom>Entre</PrimaryButtom>
                </ContainerPrimColor>
            </Container>
        </>
    )
}

export default LoginPage;