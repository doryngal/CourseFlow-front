// components/Comment/CommentList.jsx
import { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';
import axios from '../../services/api';

function CommentList({ courseId, moduleId }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const endpoint = courseId
            ? `/courses/${courseId}/comments`
            : `/modules/${moduleId}/comments`;

        axios.get(endpoint).then((response) => {
            setComments(response.data.Comments);
        });
    }, [courseId, moduleId]);

    const handleDelete = (id) => {
        axios.delete(`/comments/${id}`).then(() => {
            setComments((prevComments) => prevComments.filter((c) => c.ID !== id));
        });
    };

    return (
        <List>
            {comments.map((comment) => (
                <ListItem key={comment.ID} alignItems="flex-start">
                    <ListItemText
                        primary={comment.UserName}
                        secondary={comment.Content}
                    />
                    {/* Проверка прав на удаление комментария */}
                    <Button onClick={() => handleDelete(comment.ID)}>Удалить</Button>
                </ListItem>
            ))}
        </List>
    );
}

export default CommentList;