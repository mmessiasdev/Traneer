import { PlayArrow } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import ThumbCard from "../thumbcard";

const Banner = () => {

    return <>
        <Stack direction={{ xs: "column", lg:"row"}} sx={{ width: "100%", display:"flex", alignItems: "center", justifyContent:"space-evenly"}}>
                <Box sx={{  alignItems: "center", overflow: "hidden", maxWidth:"450px" }}>
                    <Typography variant="h1">Conheça a Connect!</Typography>
                    <Box sx={{height:"15px"}}/>
                    <Typography variant="h3">Um breve treinamento para ampliação do conhecimento da nossa querida empresa e como tudo surgiu!</Typography>

                </Box>                    
                <ThumbCard/>
        </Stack>
    </>
}

export default Banner;