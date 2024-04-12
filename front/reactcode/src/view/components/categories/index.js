import { Box, Button, Grid, Typography } from "@mui/material";

const Categories = ({title}) => {
    return (
        <>
            <Grid item>
                <Button sx={{ borderRadius: "10px", padding: "15px 50px" }} variant="contained"><Typography variant="h3" sx={{ textTransform: "capitalize" }}>{title}</Typography></Button>
            </Grid>
        </>
    )
}

export default Categories;