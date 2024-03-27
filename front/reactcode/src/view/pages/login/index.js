import { Box, Typography } from "@mui/material"
import LoginComponent from "../../components/login"

const LoginPage = () => {
    return <>
        <div className="loginPage">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", flexDirection: {lg: "row", xs: "column"}, width: "100%", height: "100vh", bgcolor: 'background.main', padding: "10%" }}>
                <Typography variant="h1">
                    Faça Login
                </Typography>
                <Box height="50px" sx={{display: {lg: "none", xs: "flex"}}} />
                <Box sx={{ width: "100px" }} />
                <LoginComponent />
            </Box>

        </div>

    </>
}

export default LoginPage;