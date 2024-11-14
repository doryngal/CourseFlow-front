// pages/RegisterPage.jsx
import { Container, Typography, TextField, Button } from '@mui/material';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import styles from './SighUpPage.module.css';

function SignUpPage() {
    return (
        <div className={styles.body}>

            <Container component="main" maxWidth="xs" className={styles.formContainer}>
                <Typography variant="h5" gutterBottom>
                    Регистрация
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
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Подтвердите пароль"
                        type="password"
                    />
                    <Button fullWidth variant="contained" color="primary" className={styles.submitButton}>
                        Зарегистрироваться
                    </Button>
                </form>
            </Container>

        </div>
    );
}

export default SignUpPage;
