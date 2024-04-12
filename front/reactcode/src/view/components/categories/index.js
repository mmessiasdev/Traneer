import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Categories = ({ title, linkto }) => {

    const url = "/cateorie/" + linkto;

    return (
        <>
            <Link target="_blank" to={url}>
                <Grid item sx={{ margin: { sm: "25px", xs: "5px" } }}>
                    <Button sx={{ borderRadius: "10px", padding: "15px 50px" }} variant="contained"><Typography variant="h3" sx={{ textTransform: "capitalize" }}>{title}</Typography></Button>
                </Grid>
            </Link>
        </>
    )
}

export default Categories;