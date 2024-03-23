import { Box, Typography } from "@mui/material";
import Header from "../../components/header";
import ResponsiveHeader from "../../components/header/responsive";
import Banner from "../../components/banner";
import ResponsiveBanner from "../../components/banner/responsive";
import Categories from "../../components/categories";
import ThumbList from "../../components/thumblist";
import Footer from "../../components/footer";


const ResponsiveHomePage = () => {
  return (
    <div className="responsiveHomePage">
      <ResponsiveHeader />
      <Box sx={{ width: "100%", padding: "100px 30px" }}>
        <ResponsiveBanner />
        <Categories/>
        <ThumbList/>
      </Box>
      <Footer/>

    </div>
  )
}

export default ResponsiveHomePage;