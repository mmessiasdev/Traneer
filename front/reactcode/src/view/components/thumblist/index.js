import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import ThumbContainer from "../thumbcontainer";

const ThumbList = () => {

    return <>
        <Box width="100%">
            <Typography variant="h2">
                Essenciais
            </Typography>
            <Box sx={{ height: "50px" }} />
            <ThumbContainer/>

        </Box>
    </>
}

export default ThumbList;