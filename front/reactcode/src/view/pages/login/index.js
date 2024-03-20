import { Box, Typography } from "@mui/material"
import LoginComponent from "../../components/login"
import ResponsiveLoginPage from "./responsive";

const LoginPage = () => {
    return <>
        <div className="loginPage">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", direction: 'column', width: "100%", height: "100vh", bgcolor: 'background.main', padding: "10%" }}>
                <Typography variant="h1">
                    Faça Login
                </Typography>
                <Box sx={{ width: "100px" }} />
                <LoginComponent />
            </Box>

        </div>
        <ResponsiveLoginPage />

    </>
}

export default LoginPage;