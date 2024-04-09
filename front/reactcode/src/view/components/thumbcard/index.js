import { Box, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ThumbCard = ({ title, thumburl, linkto }) => {

    const url = "/courses/" + linkto;


    return <>
        <Grid item sx={{ cursor: "pointer", width: { sm: "425px", xs: "280px" }, height: "300px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: { sm: "25px", xs: "5px" }}}>
            <Link className="link" to={url}>
                <Paper elevation={10} sx={{ display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", borderRadius: "10px" }}>
                    <Box width={{ sm: "400px", xs: "250px" }} component="img" src={thumburl} />
                </Paper>
                <Box sx={{ height: "15px" }} />
                <Typography width={{ sm: "400px", xs: "250px" }} variant="h3">{title}</Typography>

            </Link>
        </Grid>

    </>
}

export default ThumbCard;