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
                    courseName="Курс по React"
                    courseDescription="Изучите основы React, включая компоненты, хуки и маршрутизацию."
                    courseLink="/course/react"
                />
                <CourseCard
                    courseName="Курс по JavaScript"
                    courseDescription="Погрузитесь в мир JavaScript и научитесь писать мощные веб-приложения."
                    courseLink="/course/javascript"
                />
                <CourseCard
                    courseName="Курс по CSS"
                    courseDescription="Изучите все тонкости CSS, включая Flexbox, Grid и адаптивный дизайн."
                    courseLink="/course/css"
                />
                {/* Добавьте другие курсы по аналогии */}
            </Container>


        </div>
    );
}

export default HomePage;
