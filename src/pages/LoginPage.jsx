// pages/LoginPage.jsx
import LoginForm from '../components/Auth/LoginForm';
import { Container, Typography } from '@mui/material';

function LoginPage() {
    return (
        <Container>
            <Typography variant="h4" gutterBottom align="center">
                Вход в систему
            </Typography>
            <LoginForm />
        </Container>
    );
}

export default LoginPage;