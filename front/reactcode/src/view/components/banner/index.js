import { PlayArrow } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import ThumbCard from "../thumbcard";

const Banner = ({bannerdesc, bannertitle}) => {

    return <>
        <Stack direction={{ xs: "column", lg:"row"}} sx={{ width: "100%", display:"flex", alignItems: "center", justifyContent:"space-evenly"}}>
                <Box sx={{  alignItems: "center", overflow: "hidden", maxWidth:"450px" }}>
                    <Typography variant="h1">{bannertitle}</Typography>
                    <Box sx={{height:"15px"}}/>
                    <Typography variant="h3">{bannerdesc}</Typography>
                </Box>
                <ThumbCard/>
        </Stack>
    </>
}

export default Banner;