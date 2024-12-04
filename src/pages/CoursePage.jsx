// pages/CoursePage.jsx
import React, { useState } from 'react';
import { Container, Button, Grid, Typography } from '@mui/material';
import styles from './CoursePage.module.css';

const courseWeeks = [
    { week: 1, title: 'Введение', lecture: 'Лекция 1: Введение в курс', lab: 'ЛР 1: Основы', sro: 'СРО 1' },
    { week: 2, title: 'Тема 2', lecture: 'Лекция 2: ...', lab: 'ЛР 2: ...', sro: 'СРО 2' },
    // Добавьте остальные 13 недель
];

function CoursePage() {
    const [selectedWeek, setSelectedWeek] = useState(null);

    const handleSelectWeek = (week) => {
        setSelectedWeek(week);
    };

    const handleNextWeek = () => {
        setSelectedWeek((prev) => (prev < courseWeeks.length ? prev + 1 : prev));
    };

    const handlePrevWeek = () => {
        setSelectedWeek((prev) => (prev > 1 ? prev - 1 : prev));
    };

    const handleCollapse = () => {
        setSelectedWeek(null);
    };

    return (
        <Container className={styles.courseContainer}>
            {selectedWeek === null ? (
                <Grid container spacing={2}>
                    {courseWeeks.map((week) => (
                        <Grid item xs={12} sm={6} md={4} key={week.week}>
                            <div className={styles.weekCard} onClick={() => handleSelectWeek(week.week)}>
                                <Typography variant="h6">Неделя {week.week}</Typography>
                                <Typography variant="body2">{week.title}</Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <div className={styles.weekDetail}>
                    <Typography variant="h4">Неделя {selectedWeek}: {courseWeeks[selectedWeek - 1].title}</Typography>
                    <Typography variant="h6">{courseWeeks[selectedWeek - 1].lecture}</Typography>
                    <Typography>{courseWeeks[selectedWeek - 1].lab}</Typography>
                    <Typography>{courseWeeks[selectedWeek - 1].sro}</Typography>

                    <div className={styles.buttonContainer}>
                        <Button variant="contained" onClick={handlePrevWeek} disabled={selectedWeek === 1}>Предыдущая</Button>
                        <Button variant="contained" onClick={handleCollapse}>К списку недель</Button>
                        <Button variant="contained" onClick={handleNextWeek} disabled={selectedWeek === courseWeeks.length}>Следующая</Button>
                    </div>
                </div>
            )}
        </Container>
    );
}

export default CoursePage;
