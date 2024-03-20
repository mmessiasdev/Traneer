import { Box, Typography } from "@mui/material"
import LoginComponent from "../../components/login"

const ResponsiveLoginPage = () => {
    return <div className="responsiveLoginPage">
        <Box sx={{ flexDirection: "column", display: "flex", alignItems: 'center', justifyContent: "center", width: "100%", bgcolor: 'background.main', padding: "100px 30px" }}>
            <Typography variant="h1">
                Faça Login
            </Typography>
            <Box sx={{ height: "75px" }} />
            <LoginComponent />
        </Box>

    </div>
}

export default ResponsiveLoginPage;