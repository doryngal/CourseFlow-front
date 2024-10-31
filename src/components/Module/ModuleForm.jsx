// components/Module/ModuleForm.jsx
import { useState, useEffect } from 'react';
import { TextField, Button, Container } from '@mui/material';
import axios from '../../src/services/api';
import { useNavigate, useParams } from 'react-router-dom';

function ModuleForm({ isEdit = false }) {
    const { courseId, moduleId } = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [order, setOrder] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (isEdit) {
            axios.get(`/modules/${moduleId}`).then((response) => {
                const module = response.data;
                setTitle(module.Title);
                setContent(module.Content);
                setOrder(module.Order);
            });
        }
    }, [isEdit, moduleId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { Title: title, Content: content, Order: order };

        if (isEdit) {
            axios.put(`/modules/${moduleId}`, data).then(() => {
                navigate(`/courses/${courseId}`);
            });
        } else {
            axios.post(`/courses/${courseId}/modules`, data).then(() => {
                navigate(`/courses/${courseId}`);
            });
        }
    };

    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Название модуля"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Содержимое модуля"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    fullWidth
                    multiline
                    rows={6}
                    margin="normal"
                />
                <TextField
                    label="Порядковый номер"
                    type="number"
                    value={order}
                    onChange={(e) => setOrder(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    {isEdit ? 'Обновить модуль' : 'Создать модуль'}
                </Button>
            </form>
        </Container>
    );
}

export default ModuleForm;