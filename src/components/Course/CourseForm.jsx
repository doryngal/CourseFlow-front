// components/Course/CourseForm.jsx
import { useState, useEffect } from 'react';
import { TextField, Button, Container } from '@mui/material';
import {service2Api} from '../../services/api';
import { useNavigate, useParams } from 'react-router-dom';

function CourseForm({ isEdit = false }) {
    const { id } = useParams(); // ID курса
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (isEdit) {
            service2Api().get(`/courses/${id}`).then((response) => {
                const course = response.data;
                setTitle(course.Title);
                setDescription(course.Description);
            });
        }
    }, [isEdit, id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { Title: title, Description: description };

        if (isEdit) {
            axios.put(`/courses/${id}`, data).then(() => {
                navigate(`/courses/${id}`);
            });
        } else {
            axios.post('/courses', data).then((response) => {
                navigate(`/courses/${response.data.ID}`);
            });
        }
    };

    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Название курса"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Описание курса"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    {isEdit ? 'Обновить курс' : 'Создать курс'}
                </Button>
            </form>
        </Container>
    );
}

export default CourseForm;