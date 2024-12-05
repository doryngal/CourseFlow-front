import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import styles from './Header.module.css';

function Header() {
    const { isAuthenticated, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <AppBar position="static" color="transparent" className={styles.header}>
            <Toolbar className={styles.toolbar}>
                <Typography variant="h6" className={`${styles.logo} ${styles.buttonBox}`}>
                    <Link to="/" className={styles.link}>ENUpik</Link>
                </Typography>

                <div className={styles.search}>
                    <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Поиск"
                        className={styles.searchField}
                    />
                </div>

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