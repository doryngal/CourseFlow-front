// components/Course/CourseCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CourseCard.module.css';

function CourseCard({ courseName, courseDescription, courseId }) { // Заменяем courseLink на courseId
    return (
        <div className={styles.cardContainer}>
            <Link to={`/courses/${courseId}`} className={styles.card}> {/* Генерация ссылки по courseId */}
                <div className={styles.cardContent}>
                    <h3 className={styles.courseName}>{courseName}</h3>
                    <p className={styles.courseDescription}>{courseDescription}</p>
                </div>
            </Link>
        </div>
    );
}

export default CourseCard;
