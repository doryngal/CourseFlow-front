// components/Layout/Header.jsx
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    const isAuthenticated = false; // Здесь будет логика проверки аутентификации

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <Link to="/">MyCourses</Link>
                </Typography>
                {isAuthenticated ? (
                    <>
                        <Button color="inherit" component={Link} to="/profile">
                            Профиль
                        </Button>
                        <Button color="inherit">Выйти</Button>
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
            </Toolbar>
        </AppBar>
    );
}

export default Header;