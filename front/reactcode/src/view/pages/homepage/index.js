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
  const [dataLoaded, setDataLoaded] = useState(false); // Estado para controlar se os dados foram carregados
  const [courses, setCourses] = useState(null);





  useEffect(() => {
    const fetchBanner = async () => {
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
        setDataLoaded(true); // Marcar que os dados foram carregados com sucesso
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchBanner();
  }, [token]);

  useEffect(() => {

    const fetchCourses = async () => {
      try {
        const coursesResponse = await axios.get(`${process.env.REACT_APP_BASEURL}/api/courses?populate=*`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        setCourses(coursesResponse.data.data);

      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchCourses();

  }, [token]);

  console.log(courses);


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
                <Banner videotitle={initialVideo.attributes.title} thumburl={initialVideo.attributes.thumb} linkto={initialVideo.id} bannertitle={corporation.data.attributes.banner.bannertitle} bannerdesc={corporation.data.attributes.banner.bannerdesc} />
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
            {
              courses ? (
                <>
                  {courses.map(item => (
                    <ThumbCard linkto={item.id} thumburl={courses ? item.attributes.thumb : ""} />
                  ))}
                </>
              ) : <div></div>
            }

          </Grid>
        </Box>
        <Footer />

      </div>
    </>
  )
}

export default HomePage;