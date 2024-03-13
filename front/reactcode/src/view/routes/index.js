import { Routes, Route, Navigate } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import History from '../../controller/history';
import Style from '../../style';
import GlobalStyle from '../styles/global';
import HomePage from '../homepage';


function RoutesPage() {
    return (
        <>
            <Style />
            <GlobalStyle />
            <Router history={History}>
                <Routes>
                    <Route path='/' element={<HomePage/>} />
                </Routes>
            </Router>
        </>
    )
}

export default RoutesPage;