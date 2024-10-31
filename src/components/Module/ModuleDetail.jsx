// components/Module/ModuleDetail.jsx
import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from '../../services/api';
import CommentList from '../Comment/CommentList';
import CommentForm from '../Comment/CommentForm';

function ModuleDetail() {
    const { id } = useParams();
    const [module, setModule] = useState(null);

    useEffect(() => {
        axios.get(`/modules/${id}`).then((response) => {
            setModule(response.data);
        });
    }, [id]);

    if (!module) return <div>Загрузка...</div>;

    return (
        <div>
            <Typography variant="h4">{module.Title}</Typography>
            <Typography variant="body1">{module.Content}</Typography>

            {/* Комментарии к модулю */}
            <CommentForm moduleId={module.ID} />
            <CommentList moduleId={module.ID} />
        </div>
    );
}

export default ModuleDetail;