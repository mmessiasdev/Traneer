import { Box, Grid, Typography } from "@mui/material";
import Header from "../../components/header";
import Banner from "../../components/banner";
import Categories from "../../components/categories";
import Footer from "../../components/footer";
import ThumbCard from "../../components/thumbcard";
import DefaultTitle from "../../components/title";


const HomePage = () => {
  const styles = {
    paperContainer: {
      width: "100%",
      height: "600px",
      justifyContent: "center",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
    },
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
          <img style={styles.wallpaperImage} src="https://jornaldecorrentina.com.br/wp-content/uploads/2023/05/0101.jpg" />
          <Box sx={{ width: "100%", padding: { md: "100px 150px", xs: "100px 30px" } }}>
            <Banner />
          </Box>
        </div>
        <Box sx={{ padding: { md: "100px 150px", xs: "100px 30px" } }}>
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