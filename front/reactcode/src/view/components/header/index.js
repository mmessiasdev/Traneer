import { MenuOutlined, Person } from "@mui/icons-material";
import { Box, Button, Divider, IconButton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            {windowWidth < 900 ? <ResponsiveHeader /> : <DesktopHeader />}

        </>
    )
}


const DesktopHeader = () => {
    return <>
        <Box sx={{ zIndex: "10", width: "100%", bgcolor: "primary.main", padding: { md: "15px 150px", sm: "15px 30px" }, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Link to={"/home"}>
                <Box sx={{ height: "55px", display: "flex" }}>
                    <img src="https://connectba.com.br/core/views/860ad119c2/assets/img/logo.png" />
                </Box>
            </Link>
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
            >
                <Button sx={{ textTransform: "capitalize" }} variant="text" color="background"><Typography variant="h3">Text</Typography></Button>
                <Button sx={{ textTransform: "capitalize" }} variant="text" color="background"><Typography variant="h3">Text</Typography></Button>
                <Button sx={{ textTransform: "capitalize" }} variant="text" color="background"><Typography variant="h3">Text</Typography></Button>

                <Link to={"/profile"}>
                    <IconButton color="background">
                        <Person />
                    </IconButton>
                </Link>

            </Stack>
        </Box>
    </>
}

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

export default Header;