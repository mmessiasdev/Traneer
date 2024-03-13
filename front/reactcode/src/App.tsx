import { ThemeProvider } from 'styled-components';
import light from './view/styles/themes/light';
import usePeristedState from './utils/useperisted';
import RoutesPage from './view/routes';

const App = () => {

    const [theme, setTheme] = usePeristedState('theme', light);

    // const toggleTheme = () => {
    //     setTheme(theme.title === 'light' ? dark : light);
    // };


    return (

        <ThemeProvider theme={theme}>
            {/* <Container width='100%' disp='flex' justify='center'>
                <ThemeContainer toggleTheme={toggleTheme}></ThemeContainer>
            </Container> */}
            <RoutesPage />

        </ThemeProvider>
    );
}

export default App;