// pages/HomePage.jsx
import { Container, Typography } from '@mui/material';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import CourseCard from '../components/Course/CourseCard';  // Импортируем CourseCard
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
                {/* Добавляем карточки курсов */}
                <CourseCard
                    courseName="Курс по МИТ"
                    courseDescription='Изучите дисциплину "Мобильные информационные технологии".'
                    courseLink="/course/react"
                />
                <CourseCard
                    courseName="Курс по javascript"
                    courseDescription="."
                    courseLink="/course/javascript"
                />

            </Container>


        </div>
    );
}

export default HomePage;
