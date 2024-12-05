import { useState, useContext } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { service1Api } from '../../services/api';
import styles from './SignUpForm.module.css';

function SignUpForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await service1Api.post('/auth/register', { name, email, password });
            // Предполагается, что после регистрации вы можете автоматически логинить пользователя
            const { token } = response.data;
            if (token) {
                login(token);
            }
            navigate('/login');
        } catch (error) {
            console.error('Ошибка при регистрации:', error);
            // Обработка ошибок
        }
    };

    return (
        <div className={styles.body}>
            <Container component="main" maxWidth="xs" className={styles.formContainer}>
                <Typography variant="h5" gutterBottom>
                    Регистрация
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Email"
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
                        Зарегистрироваться
                    </Button>
                </form>
            </Container>
        </div>
    );
}

export default SignUpForm;