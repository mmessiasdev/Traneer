import { Box, Grid, Typography } from "@mui/material";
import Header from "../../components/header";
import Banner from "../../components/banner";
import Categories from "../../components/categories";
import Footer from "../../components/footer";
import ThumbCard from "../../components/thumbcard";
import DefaultTitle from "../../components/title";
import { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import Logo from '../../assets/logo.png';




const HomePage = () => {

  const token = localStorage.getItem('authToken');


  const [corporation, setCorporation] = useState(null);
  const [initialVideo, setInitialVideo] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false); // Estado para controlar se os dados foram carregados
  const [courses, setCourses] = useState(null);
  const [categories, setCategories] = useState(null);



  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const corporationResponse = await axios.get(`${process.env.REACT_APP_BASEURL}/api/corporations/1?populate=*`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning':true
          },
        });
        setCorporation(corporationResponse.data);
        const initialVideoResponse = await axios.get(`${process.env.REACT_APP_BASEURL}/api/courses/1?populate=*`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning':true



          }
        });
        setInitialVideo(initialVideoResponse.data.data);
        setDataLoaded(true); // Marcar que os dados foram carregados com sucesso
      } catch (error) {
        console.error('Erro ao buscar dados da API Corporation:', error);
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
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning':true

          }
        });
        setCourses(coursesResponse.data.data);

      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };
    fetchCourses();
  }, [token]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesResponse = await axios.get(`${process.env.REACT_APP_BASEURL}/api/corporations/1?populate=*`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning':true
          }
        });
        const categoriesData = categoriesResponse.data.data.attributes.categories.data;
        setCategories(categoriesData);
      }
      catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    }
    fetchCategories();
  }, [token])


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


  console.log(corporation);



  return (
    <>
      <div className="homePage">
        {
          corporation ? (
            <Header logo={"https://connectba.com.br/core/views/860ad119c2/assets/img/logo.png"} />
          ) : <></>
        }
        <div style={styles.paperContainer}>
          {dataLoaded ? (
            <div>
              <img style={styles.wallpaperImage} src={corporation.data.attributes.banner.bannerurl} alt={corporation.data.attributes.banner.bannertitle} />
              <Box sx={{ width: "100%", padding: { md: "100px 150px", xs: "100px 10px" } }}>
                <Banner videotitle={initialVideo.attributes.title} thumburl={initialVideo.attributes.thumb} linkto={initialVideo.id} bannertitle={corporation.data.attributes.banner.bannertitle} bannerdesc={corporation.data.attributes.banner.bannerdesc} />
              </Box>
            </div>
          ) : (
            <Box sx={{ justifyContent: "center", alignItems: "center", display: "flex", width: "100%", height: "80vh", padding: "100px 15px" }}> <CircularProgress size={50} color="primary" /></Box>
          )}
        </div>
        <Box sx={{ padding: { md: "50px 150px", xs: "15px 10px" } }}>
          <DefaultTitle text="Categorias" />
          <Box height="50px" />
          <Grid container sx={{ justifyContent: { lg: "start", xs: "center" } }}>
            {
              categories ? (
                <>
                  {categories.map(item => (
                    <Categories linkto={item.id} title={categories ? item.attributes.name : ""} />
                  ))}
                </>
              ) : <div></div>
            }

          </Grid>
          <DefaultTitle text="Treinamentos Essenciais" />
          <Grid container sx={{ justifyContent: { lg: "start", xs: "center" } }}>
            {
              courses ? (
                <>
                  {courses.map(item => (
                    <div>
                      {
                        item.attributes.thumb ? (
                          <ThumbCard linkto={item.id} thumburl={courses ? item.attributes.thumb : ""} title={item.attributes.title} />

                        ) : <></>
                      }

                    </div>
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