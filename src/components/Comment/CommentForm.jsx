// components/Comment/CommentForm.jsx
import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from '../../services/api';

function CommentForm({ courseId, moduleId }) {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const endpoint = courseId
            ? `/courses/${courseId}/comments`
            : `/modules/${moduleId}/comments`;

        axios
            .post(endpoint, { Content: content })
            .then(() => {
                setContent('');
                // Обновление списка комментариев
            })
            .catch((error) => {
                // Обработка ошибок
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Оставьте комментарий"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                fullWidth
                multiline
                rows={4}
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
                Отправить
            </Button>
        </form>
    );
}

export default CommentForm;