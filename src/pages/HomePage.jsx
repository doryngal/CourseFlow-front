// pages/HomePage.jsx
import CourseList from '../components/Course/CourseList';
import { Container, Typography } from '@mui/material';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import styles from './HomePage.module.css';

function HomePage() {
    return (
        <div className={styles.body}>

            <section className={styles.hero}>
                <Typography variant="h3" gutterBottom>
                    Добро пожаловать в ENUpik
                </Typography>
                <p>Платформа для выбора курсов от ENU</p>
            </section>
            <Container className={styles.courses}>
                <CourseList />
            </Container>

        </div>
    );
}

export default HomePage;
