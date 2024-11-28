// components/Course/CourseCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CourseCard.module.css';

function CourseCard({ courseName, courseDescription, courseLink }) {
    return (
        <div className={styles.cardContainer}>
            <Link to={courseLink} className={styles.card}>
                <div className={styles.cardContent}>
                    <h3 className={styles.courseName}>{courseName}</h3>
                    <p className={styles.courseDescription}>{courseDescription}</p>
                </div>
            </Link>
        </div>
    );
}

export default CourseCard;
