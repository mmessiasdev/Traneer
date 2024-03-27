import { Box, Grid, Paper, Typography } from "@mui/material";
import Header from "../../components/header";
import ThumbCard from "../../components/thumbcard";

const Profile = () => {


    return <>
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <Header />
            <Box sx={{ width: "100%", padding: "0px 150px" }}>
                <Box sx={{ width: "100%", justifyContent: "center", alignItems: "center", padding: "75px 0px" }}>
                    <Typography variant="h1">
                        M. Messias
                    </Typography>
                    <Typography variant="h3">
                        Cargo
                    </Typography>
                </Box>
                <Box padding="50px 0px">
                    <Typography padding="75px 0px" variant="h2">
                        Cursos Recomendados
                    </Typography>
                    <Grid alignItems="center" justifyContent="center" container >
                        <ThumbCard/>
                        <ThumbCard/>    
                        <ThumbCard/>
                        <ThumbCard/>
                        <ThumbCard/>
                        <ThumbCard/>
                        
                    </Grid>
                </Box>
            </Box>
        </Box>
    </>
}

export default Profile;