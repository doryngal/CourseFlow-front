import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CoursePage from './pages/CoursePage';
import ModulePage from './pages/ModulePage';
import ProfilePage from './pages/ProfilePage';
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import PrivateRoute from './components/PrivateRoute';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/courses/:id" element={<CoursePage />} />
                <Route path="/modules/:id" element={<ModulePage />} />
                <Route
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <ProfilePage />
                        </PrivateRoute>
                    }
                />
                {/* Добавьте другие защищённые маршруты аналогично */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;