// components/Auth/LoginForm.jsx
import { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import axios from '../../services/api';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Для перенаправления после входа

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/auth/login', { Email: email, Password: password });
            const token = response.data.token; // Предполагается, что токен возвращается в поле 'token'
            // Сохраняем токен в localStorage
            localStorage.setItem('token', token);
            // Перенаправляем на главную страницу
            navigate('/');
        } catch (error) {
            // Обработка ошибок
            console.error('Ошибка при входе в систему:', error);
        }
    };

    return (
        <Container maxWidth="sm" className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Электронная почта"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Пароль"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Войти
                </Button>
            </form>
        </Container>
    );
}

export default LoginForm;