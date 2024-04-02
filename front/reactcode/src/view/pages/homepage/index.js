import { Box, Grid, Typography } from "@mui/material";
import Header from "../../components/header";
import Banner from "../../components/banner";
import Categories from "../../components/categories";
import Footer from "../../components/footer";
import ThumbCard from "../../components/thumbcard";
import DefaultTitle from "../../components/title";
import { useEffect, useState } from "react";
import fetchCorporationBanner from "../../../controller/api/corporation/banner";
import axios from "axios";


const HomePage = () => {

  const [data, setData] = useState(null);
  const token = localStorage.getItem('authToken');
  const [initalVideo, setInitialVideo] = useState(null);
  const [initialYoutubePlaylist, setInitialYoutubePlaylist] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASEURL}/api/corporations/1?populate=*`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };
    
    fetchData();
  }, []);


  useEffect(() => {
    const fetchDataInitialVideo = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASEURL}/api/courses/2?populate=*`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        setInitialVideo(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };
    
    fetchDataInitialVideo();
  }, []);

  useEffect(() => {
    const fetchYoutubePlaylist = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${initalVideo.data.attributes.playlistid}&key=${process.env.REACT_APP_YOUTUBEKEY}&maxResults=50&contentDetails`, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        setInitialYoutubePlaylist(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };
    
    fetchYoutubePlaylist();
  }, []);

  console.log('Teste', initialYoutubePlaylist);

  



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
          {data ? (
            <div>
              <img style={styles.wallpaperImage} src={data.data.attributes.banner.bannerurl} alt={data.data.attributes.banner.bannertitle} />
              <Box sx={{ width: "100%", padding: { md: "100px 150px", xs: "100px 10px" } }}>
                <Banner bannertitle={data.data.attributes.banner.bannertitle} bannerdesc={data.data.attributes.banner.bannerdesc} videotitle={initalVideo.data.attributes.title}/>
              </Box>
            </div>
          ) : (
            <Box sx={{justifyContent: "center", display: "flex", width: "100%", padding: "100px 15px"}}> <p>Carregando...</p> </Box>
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