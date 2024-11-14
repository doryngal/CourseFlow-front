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
                {/* Logo on the left */}
                <Typography variant="h6" className={styles.logo}>
                    <Link to="/" className={styles.link}>ENUpik</Link>
                </Typography>

                {/* Center search bar */}
                <div className={styles.search}>
                    <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Поиск"
                        className={styles.searchField}
                    />
                </div>

                {/* Auth buttons on the right */}
                <div className={styles.authButtons}>
                    {isAuthenticated ? (
                        <>
                            <Button color="inherit" component={Link} to="/profile">
                                Профиль
                            </Button>
                            <Button color="inherit" onClick={handleLogout}>
                                Выйти
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button color="inherit" component={Link} to="/login">
                                Войти
                            </Button>
                            <Button color="inherit" component={Link} to="/signup">
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
