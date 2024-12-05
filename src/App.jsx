// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CoursePage from './pages/CoursePage'; // Убедитесь, что путь правильный
import ModulePage from './pages/ModulePage';
import ProfilePage from './pages/ProfilePage';
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/courses/:id" element={<CoursePage />} /> {/* Маршрут для курса */}
                <Route path="/modules/:id" element={<ModulePage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
