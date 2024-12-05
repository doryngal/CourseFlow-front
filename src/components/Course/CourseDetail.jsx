// components/Course/CourseDetail.jsx
import { useEffect, useState } from 'react';
import { Typography, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { service2Api } from '../../services/api';

import ModuleList from '../Module/ModuleList';

function CourseDetail() {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        service2Api.get(`/courses/${id}`).then((response) => {
            setCourse(response.data);
        });
    }, [id]);

    if (!course) return <div>Загрузка...</div>;

    return (
        <div>
            <Typography variant="h4">{course.Title}</Typography>
            <Typography variant="body1">{course.Description}</Typography>
            <Button variant="contained" color="primary">Записаться на курс</Button>
            <ModuleList modules={course.Modules} />
        </div>
    );
}

export default CourseDetail;