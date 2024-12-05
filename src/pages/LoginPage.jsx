// pages/LoginPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button } from '@mui/material';
import { service1Api } from '../services/api';
import styles from './LoginPage.module.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await service1Api.post('/auth/login', { email, password });
            const { token } = response.data;
            localStorage.setItem('token', token);
            navigate('/');
        } catch (error) {
            console.error('Ошибка при входе:', error);
            // Обработка ошибок, например, отображение сообщения пользователю
        }
    };

    return (
        <div className={styles.body}>
            <Container component="main" maxWidth="xs" className={styles.formContainer}>
                <Typography variant="h5" gutterBottom>
                    Войти в систему
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Пароль"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={styles.submitButton}
                    >
                        Войти
                    </Button>
                </form>
            </Container>
        </div>
    );
}

export default LoginPage;