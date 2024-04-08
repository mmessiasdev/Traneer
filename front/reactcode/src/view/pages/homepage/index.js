import { Box, Grid, Typography } from "@mui/material";
import Header from "../../components/header";
import Banner from "../../components/banner";
import Categories from "../../components/categories";
import Footer from "../../components/footer";
import ThumbCard from "../../components/thumbcard";
import DefaultTitle from "../../components/title";
import { useEffect, useState } from "react";
import axios from "axios";


const HomePage = () => {

  const token = localStorage.getItem('authToken');



  const [corporation, setCorporation] = useState(null);
  const [initialVideo, setInitialVideo] = useState(null);
  const [initialYoutubePlaylist, setInitialYoutubePlaylist] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false); // Estado para controlar se os dados foram carregados




  useEffect(() => {
    const fetchData = async () => {
      try {
        const corporationResponse = await axios.get(`${process.env.REACT_APP_BASEURL}/api/corporations/1?populate=*`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        setCorporation(corporationResponse.data);

        const initialVideoResponse = await axios.get(`${process.env.REACT_APP_BASEURL}/api/courses/2?populate=*`, {
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
        
        setDataLoaded(true); // Marcar que os dados foram carregados com sucesso
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, [token]); 





  const styles = {
    wallpaperImage: {
      position: "absolute",
      width: "100%",
      height: "600px",
      objectFit: "cover",
      zIndex: "-10",
      opacity: "20%"
    }
  };

  return (
    <>
      <div className="homePage">
        <Header />
        <div style={styles.paperContainer}>
          {dataLoaded ? (
            <div>
              <img style={styles.wallpaperImage} src={corporation.data.attributes.banner.bannerurl} alt={corporation.data.attributes.banner.bannertitle} />
              <Box sx={{ width: "100%", padding: { md: "100px 150px", xs: "100px 10px" } }}>
                <Banner linkto={initialVideo.id} bannertitle={corporation.data.attributes.banner.bannertitle} bannerdesc={corporation.data.attributes.banner.bannerdesc} videotitle={initialYoutubePlaylist ? initialYoutubePlaylist.title : ""} thumburl={initialYoutubePlaylist ? initialYoutubePlaylist.thumbnails.maxres.url : ""} />
              </Box>
            </div>
          ) : (
            <Box sx={{ justifyContent: "center", display: "flex", width: "100%", padding: "100px 15px" }}> <p>Carregando...</p> </Box>
          )}
        </div>
        <Box sx={{ padding: { md: "50px 150px", xs: "15px 10px" } }}>
          <DefaultTitle text="Categorias" />
          <Box height="50px" />
          <Categories />
          <DefaultTitle text="Treinamentos Essenciais" />
          <Grid container sx={{ justifyContent: { lg: "start", xs: "center" } }}>
            <ThumbCard />
            <ThumbCard />
            <ThumbCard />
            <ThumbCard />
            <ThumbCard />
          </Grid>
        </Box>
        <Footer />

      </div>
    </>
  )
}

export default HomePage;