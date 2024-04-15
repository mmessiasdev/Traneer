import { Box, Grid, Paper, Typography } from "@mui/material";
import Header from "../../components/header";
import ThumbCard from "../../components/thumbcard";
import { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';


const Profile = () => {

    const [profile, setProfile] = useState(null);
    const token = localStorage.getItem('authToken');


    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                const coursesResponse = await axios.get(`${process.env.REACT_APP_BASEURL}/api/profile/me?populate=*`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                setProfile(coursesResponse.data);

            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };
        fetchProfiles();
    }, [token]);

    return <>
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <Header />
            <Box sx={{ width: "100%", padding: { md: "100px 150px", xs: "10px 10px" } }}>
                <Box sx={{ width: "100%", justifyContent: "center", alignItems: "center", padding: "75px 0px" }}>
                    {
                        profile ? (
                            <>
                                <Typography variant="h1">
                                    {profile.lname}
                                </Typography>
                                <Typography variant="h3">
                                    {profile.corporation.name}
                                </Typography>
                            </>


                        ) : (
                            <Box sx={{ justifyContent: "center", alignItems: "center", display: "flex", width: "100%", padding: "100px 15px" }}> <CircularProgress size={50} color="primary" /></Box>
                        )}

                </Box>
            </Box>
        </Box >
    </>
}

export default Profile;