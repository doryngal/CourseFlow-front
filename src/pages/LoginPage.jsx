// pages/LoginPage.jsx
import { Container, Typography, TextField, Button } from '@mui/material';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import styles from './LoginPage.module.css';

function LoginPage() {
    return (
        <div className={styles.body}>

            <Container component="main" maxWidth="xs" className={styles.formContainer}>
                <Typography variant="h5" gutterBottom>
                    Войти в систему
                </Typography>
                <form>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Пароль"
                        type="password"
                    />
                    <Button fullWidth variant="contained" color="primary" className={styles.submitButton}>
                        Войти
                    </Button>
                </form>
            </Container>

        </div>
    );
}

export default LoginPage;
