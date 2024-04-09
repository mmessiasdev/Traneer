import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
import DefaultTitle from "../../components/title";
import { Image } from "@mui/icons-material";

const Course = () => {
    const token = localStorage.getItem('authToken');
    const { id } = useParams();

    const [initialVideo, setInitialVideo] = useState(null);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [initialYoutubePlaylist, setInitialYoutubePlaylist] = useState(null);
    const [playlistItems, setPlaylistItems] = useState(null);

    const styles = {
        wallpaperImage: {
            objectFit: "contain",
            width: "100%",
        }
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const initialVideoResponse = await axios.get(`${process.env.REACT_APP_BASEURL}/api/courses/${id}?populate=*`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                setInitialVideo(initialVideoResponse.data.data);

                // Definindo o valor de playlistId após receber a resposta da API
                const playlistId = initialVideoResponse.data.data.attributes.playlistid;

                const youtubePlaylistResponse = await axios.get(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${process.env.REACT_APP_YOUTUBEKEY}`, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                setInitialYoutubePlaylist(youtubePlaylistResponse.data.items[0].snippet);

                const playlistItensResponse = await axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${process.env.REACT_APP_YOUTUBEKEY}`, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                setPlaylistItems(playlistItensResponse.data.items);

                setDataLoaded(true); // Marcar que os dados foram carregados com sucesso
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        fetchData();
    }, [token]);

    return <div>
        <Header />

        {
            initialVideo ? (
                <div>
                    <Box sx={{ width: "100%", padding: { md: "0px 150px", xs: "0px 10px" } }}>
                        <DefaultTitle text={initialVideo.attributes.title} />
                        <Box display="flex" flexDirection="flex" width="100%" marginTop="50px">
                            <Box display="flex" width="100%" height="500px" alignItems="start" justifyContent="start" overflow="hidden">
                                <img style={styles.wallpaperImage} src={initialYoutubePlaylist ? initialYoutubePlaylist.thumbnails.maxres.url : ""} />
                            </Box>
                            <Box width="100px" />
                            <Box width="65%">
                                {
                                    dataLoaded ? (
                                        <>
                                            {playlistItems.map(item => (
                                                <Box display="flex" alignItems="center" padding="10px 25px" marginBottom="20px" height="80px" width="100%" bgcolor="secondary.main" borderRadius="15px">{playlistItems ? item.snippet.title : ""}</Box>

                                                // <div key={item.id} className="playlist-item">
                                                //     <h2>{item.snippet.title}</h2>
                                                //     <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
                                                //     {/* Adicione mais informações ou elementos conforme necessário */}
                                                // </div>
                                            ))}
                                        </>
                                    ) : <div></div>
                                }

                            </Box>
                        </Box>
                    </Box>
                </div>

            ) : (
                <Box sx={{ justifyContent: "center", display: "flex", width: "100%", padding: "100px 15px" }}> <p>Carregando...</p> </Box >
            )
        }
    </div>
}

export default Course;