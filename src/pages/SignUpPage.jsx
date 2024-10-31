// pages/SignUpPage.jsx
import SignUpForm from '../components/Auth/SignUpForm';
import { Container, Typography } from '@mui/material';

function SignUpPage() {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Регистрация
            </Typography>
            <SignUpForm />
        </Container>
    );
}

export default SignUpPage;