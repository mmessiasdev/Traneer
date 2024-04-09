import { Box, Stack, Typography } from "@mui/material";
import ThumbCard from "../thumbcard";

const Banner = ({bannerdesc, bannertitle, videotitle, thumburl, linkto}) => {

    return <>
        <Stack direction={{ xs: "column", lg:"row"}} sx={{ width: "100%", display:"flex", alignItems: "center", justifyContent:"space-evenly"}}>
                <Box sx={{  alignItems: "center", overflow: "hidden", maxWidth:"450px" }}>
                    <Typography variant="h1">{bannertitle}</Typography>
                    <Box sx={{height:"15px"}}/>
                    <Typography variant="h3">{bannerdesc}</Typography>
                </Box>
                <ThumbCard title={videotitle} thumburl={thumburl} linkto={linkto}/>
        </Stack>
    </> 
}

export default Banner;