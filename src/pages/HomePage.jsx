// pages/HomePage.jsx
import CourseList from '../components/Course/CourseList';
import { Container, Typography } from '@mui/material';

function HomePage() {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                Добро пожаловать на MyCourses
            </Typography>
            <CourseList />
        </Container>
    );
}

export default HomePage;