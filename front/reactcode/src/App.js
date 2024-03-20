import { createTheme, ThemeProvider } from '@mui/material/styles';
import RoutesPage from './controller/routes/routes';

function App() {  

  const Theme = createTheme({
    palette: {
      primary: {
        main: "#5CBBFF",
        dark: "#4563FF",
        light: "#4563FF",
        contrastText: '#fff',
      },
      secondary: {
        main: "#D9D9D9"
      },
      background: {
        default: "#FFFFFF"
      },
      text: {
        primary: "#FFFFFF",
        secondary: "#5CBBFF"
      }
    },
    typography: {
      fontFamily: "Montserrat",
      h1:{
        fontSize: 48,
        fontWeight: 'normal'
      },
      h2:{
        fontSize: 32,
        fontWeight: 'normal'
      },
      h3:{
        fontSize: 20,
        fontWeight: 'bold'
      }
      

    }
  })


  return (
    <ThemeProvider theme={Theme}>
      <RoutesPage />
    </ThemeProvider>
  );
}

export default App;