// components/Auth/SignUpForm.jsx
import { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import axios from '../../services/api';

function SignUpForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/auth/signup', {
                Name: name,
                Email: email,
                Password: password,
            });
            // Перенаправление на страницу входа или на главную страницу
        } catch (error) {
            // Обработка ошибок
        }
    };

    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    margin="normal"
                />
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
                    Регистрация
                </Button>
            </form>
        </Container>
    );
}

export default SignUpForm;