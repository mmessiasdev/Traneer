import { Box, Typography } from "@mui/material";
import Header from "../../components/header";
import ResponsiveHeader from "../../components/header/responsive";
import Banner from "../../components/banner";
import ResponsiveHomePage from "./responsive";
import Categories from "../../components/categories";
import ThumbList from "../../components/thumblist";
import Footer from "../../components/footer";


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
          <Box sx={{ width: "100%", padding: "100px 150px" }}>
            <Banner />
          </Box>
        </div>
        <Box sx={{ padding: "100px 150px" }}>
          <Categories />
          <ThumbList/>
        </Box>
        <Footer/>
        
      </div>
      <ResponsiveHomePage />
    </>
  )
}

export default HomePage;