import React, { useState } from 'react';
import styles from './CoursePage.module.css';

function CoursePage() {
    const weeks = Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        title: `Неделя ${i + 1}`,
        description: `Лекции, лабораторные и СРО для недели ${i + 1}`
    }));

    const [selectedWeek, setSelectedWeek] = useState(null);

    const handleNextWeek = () => {
        if (selectedWeek && selectedWeek.id < 15) {
            setSelectedWeek(weeks[selectedWeek.id]);
        }
    };

    const handlePreviousWeek = () => {
        if (selectedWeek && selectedWeek.id > 1) {
            setSelectedWeek(weeks[selectedWeek.id - 2]);
        }
    };

    return (
        <div className={styles.coursePageContainer}>
            {selectedWeek === null ? (
                <div className={styles.weekContainer}>
                    {weeks.map((week) => (
                        <div key={week.id} className={styles.weekCard} onClick={() => setSelectedWeek(week)}>
                            <div className={styles.weekTitle}>{week.title}</div>
                            <div className={styles.weekDescription}>{week.description}</div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className={styles.weekContent}>
                    <div className={styles.weekNav}>
                        <button
                            className={styles.navButton}
                            onClick={handlePreviousWeek}
                            disabled={selectedWeek.id === 1}
                        >
                            Предыдущая неделя
                        </button>
                        <h2>{selectedWeek.title}</h2>
                        <button
                            className={styles.navButton}
                            onClick={handleNextWeek}
                            disabled={selectedWeek.id === 15}
                        >
                            Следующая неделя
                        </button>
                    </div>
                    <div className={styles.weekDetails}>
                        <p>{selectedWeek.description}</p>
                    </div>
                    <button className={styles.backButton} onClick={() => setSelectedWeek(null)}>
                        Вернуться к списку недель
                    </button>
                </div>
            )}
        </div>
    );
}

export default CoursePage;
