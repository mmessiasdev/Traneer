import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import Style from '../../../style';
import { useState } from 'react';
import AuthApi from '../../auth/authApi';
import HomePage from '../../../view/homepage';
import AuthPrivate from '../privateroutes/authRoute';
import AuthContext from '../../auth/context/authContext';
import LoginPage from '../../../view/pages/login';

function RoutesPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(AuthApi.isAuthenticated)

    return (
        <>
            <AuthContext.Provider
                value={{ isAuthenticated, setIsAuthenticated }}
            >
                <Style />
                <Router>
                    <Routes>
                        <Route path='/' element={<LoginPage/>} />
                    </Routes>
                    <AuthPrivate path="/hp" component={<HomePage />} />

                </Router>

            </AuthContext.Provider>
        </>
    )
}

export default RoutesPage;