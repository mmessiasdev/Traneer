import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import Style from '../../../style';
import { useState } from 'react';
import AuthApi from '../../auth/authApi';
import AuthPrivate from '../privateroutes/authRoute';
import AuthContext from '../../auth/context/authContext';
import LoginPage from '../../../view/pages/login';
import HomePage from '../../../view/pages/homepage';
import Profile from '../../../view/pages/profile';
import Course from '../../../view/pages/course';

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
                        <Route path='/' element={<LoginPage />} />
                    </Routes>
                    <AuthPrivate path="/home" component={<HomePage />}/>
                    <AuthPrivate path="/profile" component={<Profile/>} />
                    <AuthPrivate path="/courses/:id" component={<Course/>} />

                </Router>

            </AuthContext.Provider>
        </>
    )
}

export default RoutesPage;