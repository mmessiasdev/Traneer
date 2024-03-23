import { PlayArrow } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const ResponsiveBanner = () => {
    return <>
        <Box sx={{ width: "100%", display: "flex", flexDirection:"column", justifyContent: "center", alignItems:"center" }}>
            <Box sx={{ alignItems: "start", overflow: "hidden", width:"100%" }}>
                <Typography variant="h1">Conheça a Connect!</Typography>
                <Box sx={{ height: "15px" }} />
                <Typography variant="h3">Um breve treinamento para ampliação do conhecimento da nossa querida empresa e como tudo surgiu!</Typography>

            </Box>
            <Box sx={{ height: "100px" }} />
            <Box sx={{ width: "600px", height: "330px", overflow: "hidden", borderRadius: "45px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src="https://jornaldecorrentina.com.br/wp-content/uploads/2023/05/0101.jpg" />
                <PlayArrow color="background" sx={{ position: "absolute", fontSize: "50px" }} />
            </Box>

        </Box>
    </>
}

export default ResponsiveBanner;