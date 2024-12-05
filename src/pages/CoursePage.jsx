import React, { useState, useEffect } from 'react';
import styles from './CoursePage.module.css';
import mammoth from 'mammoth'; // Импорт библиотеки

function CoursePage() {
    const weeks = Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        title: `Неделя ${i + 1}`,
        description: `Лекции, лабораторные и СРО для недели ${i + 1}`,
        filePath: `/files/week${i + 1}.docx`  // Предполагаем, что файлы находятся в папке public/files/
    }));

    const [selectedWeek, setSelectedWeek] = useState(weeks[0]); // Изначально первая неделя
    const [fileContent, setFileContent] = useState('');

    // Загрузка и конвертация Word-файла
    const loadWordFile = (filePath) => {
        fetch(filePath)
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => mammoth.convertToHtml({ arrayBuffer }))
            .then(result => setFileContent(result.value))
            .catch(err => console.error("Ошибка загрузки файла:", err));
    };

    // Эффект для загрузки файла при изменении выбранной недели
    useEffect(() => {
        if (selectedWeek) {
            loadWordFile(selectedWeek.filePath); // Загружаем файл при изменении выбранной недели
        }
    }, [selectedWeek]);

    const handleNextWeek = () => {
        if (selectedWeek.id < weeks.length) {
            setSelectedWeek(weeks[selectedWeek.id]); // Переход к следующей неделе
        }
    };

    const handlePreviousWeek = () => {
        if (selectedWeek.id > 1) {
            setSelectedWeek(weeks[selectedWeek.id - 2]); // Переход к предыдущей неделе
        }
    };

    return (
        <div className={styles.coursePageContainer}>
            {/* Отображение списка недель, если не выбрана конкретная неделя */}
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

                    {/* Контейнер для отображения Word-файла */}
                    <div className={styles.wordContainer}>
                        <div dangerouslySetInnerHTML={{ __html: fileContent }} />
                    </div>

                    {/* Кнопка скачивания */}
                    <a
                        href={selectedWeek.filePath}
                        download
                        className={styles.downloadButton}
                    >
                        Скачать лекцию
                    </a>

                    <button className={styles.backButton} onClick={() => setSelectedWeek(null)}>
                        Вернуться к списку недель
                    </button>
                </div>
            )}
        </div>
    );
}

export default CoursePage;
