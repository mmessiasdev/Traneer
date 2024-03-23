import { PlayArrow } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const Banner = () => {

    return <>
        <Box sx={{ width: "100%", display: "flex", justifyContent:"space-evenly"}}>
                <Box sx={{  alignItems: "center", overflow: "hidden", maxWidth:"500px" }}>
                    <Typography variant="h1">Conheça a Connect!</Typography>
                    <Box sx={{height:"15px"}}/>
                    <Typography variant="h3">Um breve treinamento para ampliação do conhecimento da nossa querida empresa e como tudo surgiu!</Typography>

                </Box>                    
                <Box sx={{width:"50px"}}/>
                <Box sx={{ width: "400px", height: "235px", overflow: "hidden", borderRadius: "45px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src="https://jornaldecorrentina.com.br/wp-content/uploads/2023/05/0101.jpg" />
                    <PlayArrow color="background" sx={{position:"absolute", fontSize:"50px"}}/>
                </Box>
        </Box>
    </>
}

export default Banner;