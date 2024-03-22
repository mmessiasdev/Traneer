import { MenuOutlined } from '@mui/icons-material';
import { Box, Button, Divider, IconButton, Stack, Typography } from "@mui/material";
import { useState } from 'react';

const ResponsiveHeader = () => {
    const [click, setClick] = useState(false);


    const showMenu = () => {
        setClick(!click);
    }

    return (
        <div className='responsiveHeader'>
            <Box sx={{ width: "100%", bgcolor: "primary.main", padding: "15px 25px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Box sx={{ height: "55px", display: "flex" }}>
                    <img src="https://connectba.com.br/core/views/860ad119c2/assets/img/logo.png" />
                </Box>
                <IconButton onClick={showMenu} size="large" type="submit" color="background">
                    <MenuOutlined />
                </IconButton>
            </Box>
            {click && <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box bgcolor="primary.main" padding="25px">
                    <Stack
                        sx={{ display: "flex", alignItems: "end" }}
                        direction="column"
                        divider={<Divider orientation="horizontal" flexItem />}
                        spacing={2}
                    >
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Button sx={{ textTransform: "capitalize" }} variant="text" color="background"><Typography variant="h3">Text</Typography></Button>
                            <Button sx={{ textTransform: "capitalize" }} variant="text" color="background"><Typography variant="h3">Text</Typography></Button>
                            <Button sx={{ textTransform: "capitalize" }} variant="text" color="background"><Typography variant="h3">Text</Typography></Button>
                        </Box>



                    </Stack>

                </Box>
            </Box>
            }

        </div>
    )
}

export default ResponsiveHeader;