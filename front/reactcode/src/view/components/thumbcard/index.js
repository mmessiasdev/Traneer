import { Image } from "@mui/icons-material";
import { Box, Grid, Paper, Typography } from "@mui/material";

const ThumbCard = () => {

    return <>
        <Grid item sx={{ width: {sm: "425px", xs: "280px"}, height: "300px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: {sm: "25px", xs: "5px"}}}>
            <Paper elevation={10} sx={{ display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", borderRadius: "10px" }}>
                <Box width={{sm: "400px", xs: "250px"}} component="img" src="https://img.youtube.com/vi/8T9l-pSozjM/maxresdefault.jpg"/>
            </Paper>
            <Box sx={{ height: "15px" }} />
            <Typography width={{sm: "400px", xs: "250px"}} variant="h3">Teste asdas sa dsa dsd ascasasdda sd asd asd asd as</Typography>
        </Grid>

    </>
}

export default ThumbCard;