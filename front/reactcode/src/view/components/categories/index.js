import { Box, Button, Grid, Typography } from "@mui/material";

const Categories = () => {
    return (
        <>
            <div>
                <Box sx={{ width: "100%", marginBottom:"100px"}}>
                    <Typography variant="h2">Categorias</Typography>
                    <Box sx={{ height: "50px" }} />
                    <Grid container spacing={3}>        
                        <Grid item>
                            <Button sx={{borderRadius: "10px", padding:"15px 50px"}} variant="contained"><Typography variant="h3" sx={{textTransform:"capitalize"}}>Suporte</Typography></Button>
                        </Grid>
                        <Grid item>
                            <Button sx={{borderRadius: "10px", padding:"15px 50px"}} variant="contained"><Typography variant="h3" sx={{textTransform:"capitalize"}}>Suporte</Typography></Button>
                        </Grid>
                        <Grid item>
                            <Button sx={{borderRadius: "10px", padding:"15px 50px"}} variant="contained"><Typography variant="h3" sx={{textTransform:"capitalize"}}>Suporte</Typography></Button>
                        </Grid>
                        <Grid item>
                            <Button sx={{borderRadius: "10px", padding:"15px 50px"}} variant="contained"><Typography variant="h3" sx={{textTransform:"capitalize"}}>Suporte</Typography></Button>
                        </Grid>

                        <Grid item>
                            <Button sx={{borderRadius: "10px", padding:"15px 50px"}} variant="contained"><Typography variant="h3" sx={{textTransform:"capitalize"}}>Suporte</Typography></Button>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    )
}

export default Categories;