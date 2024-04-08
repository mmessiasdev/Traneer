import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Course = () => {
    const token = localStorage.getItem('authToken');


    const { id } = useParams();

    const [initialVideo, setInitialVideo] = useState(null);



    useEffect(() => {
        const fetchData = async () => {
            const initialVideoResponse = await axios.get(`${process.env.REACT_APP_BASEURL}/api/courses/${id}?populate=*`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            setInitialVideo(initialVideoResponse.data.data);
        }
        fetchData();

    }, [token]);

    return <>
        {
            initialVideo ? (
                <div>
                    {initialVideo.attributes.title}
                </div>

            ): (
                    <Box sx = {{ justifyContent: "center", display: "flex", width: "100%", padding: "100px 15px" }}> <p>Carregando...</p> </Box >
                )
            } 
    </>
}

export default Course;