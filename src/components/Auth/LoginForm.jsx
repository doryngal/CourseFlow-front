// components/Auth/LoginForm.jsx
import { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import axios from '../../services/api';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/auth/login', { Email: email, Password: password });
            // Сохранение токена и перенаправление
        } catch (error) {
            // Обработка ошибок
        }
    };

    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Электронная почта"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Пароль"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Войти
                </Button>
            </form>
        </Container>
    );
}

export default LoginForm;