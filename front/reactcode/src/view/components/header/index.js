import { Box, Button, Divider, Stack, Typography } from "@mui/material";

const Header = () => {
    return (
        <div className="header">
            <Box sx={{ width: "100%", bgcolor: "primary.main", padding: "15px 150px", display: "flex", alignItems: "center", justifyContent: "space-between", position:"fixed" }}>
                <Box sx={{ height: "55px", display: "flex" }}>
                    <img src="https://connectba.com.br/core/views/860ad119c2/assets/img/logo.png" />
                </Box>
                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                >
                    <Button sx={{textTransform:"capitalize"}} variant="text" color="background"><Typography variant="h3">Text</Typography></Button>
                    <Button sx={{textTransform:"capitalize"}} variant="text" color="background"><Typography variant="h3">Text</Typography></Button>
                    <Button sx={{textTransform:"capitalize"}} variant="text" color="background"><Typography variant="h3">Text</Typography></Button>


                </Stack>
            </Box>

        </div>
    )
}

export default Header;