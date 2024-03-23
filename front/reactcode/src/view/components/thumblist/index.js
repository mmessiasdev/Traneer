import { Box, Container, Grid, Paper, Typography } from "@mui/material";

const ThumbList = () => {

    const styles = {
        thumbImage: {
            width: "100%",
            objectFit: "cover",
            overflow: "hidden"
        }
    };

    return <>
        <Box width="100%">
            <Typography variant="h2">
                Essenciais
            </Typography>
            <Box sx={{ height: "50px" }} />
            <Grid container spacing={5}>
                <Grid item sx={{
                    overflow: "hidden",
                }}>
                    <Box sx={{
                        height: "200px",
                        width: "380px",
                        borderRadius: "15px",
                        display: "flex",
                        cursor: "pointer",
                        overflow: "hidden",
                        marginRight:"25px"
                    }}>
                        <img style={styles.thumbImage} src="https://jornaldecorrentina.com.br/wp-content/uploads/2023/05/0101.jpg" />
                    </Box>
                    <Box height="15px" />
                    <Box sx={{ width: "380px", overflow: "hidden"}}>
                        <Typography variant="h3">Title ASdascasc ascas cas ca cascascascacascsc ascasc</Typography>
                    </Box>
                </Grid>

            </Grid>

        </Box>
    </>
}

export default ThumbList;