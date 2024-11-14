// components/Layout/Header.jsx
import { AppBar, Toolbar, Typography, Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

function Header() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        navigate('/login');
    };

    return (
        <AppBar position="static" color="transparent" className={styles.header}>
            <Toolbar className={styles.toolbar}>
                {/* Logo with updated design */}
                <Typography variant="h6" className={`${styles.logo} ${styles.buttonBox}`}>
                    <Link to="/" className={styles.link}>ENUpik</Link>
                </Typography>

                {/* Larger search bar beside the logo */}
                <div className={styles.search}>
                    <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Поиск"
                        className={styles.searchField}
                    />
                </div>

                {/* Auth buttons with updated design */}
                <div className={styles.authButtons}>
                    {isAuthenticated ? (
                        <>
                            <Button className={styles.buttonBox} color="inherit" component={Link} to="/profile">
                                Профиль
                            </Button>
                            <Button className={styles.buttonBox} color="inherit" onClick={handleLogout}>
                                Выйти
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button className={styles.buttonBox} color="inherit" component={Link} to="/login">
                                Войти
                            </Button>
                            <Button className={styles.buttonBox} color="inherit" component={Link} to="/signup">
                                Регистрация
                            </Button>
                        </>
                    )}
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
