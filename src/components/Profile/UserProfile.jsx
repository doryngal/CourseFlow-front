import React, { useEffect, useState, useContext } from 'react';
import { Typography, TextField, Button, Container } from '@mui/material';
import { service2Api } from '../../services/api';
import { AuthContext } from '../../contexts/AuthContext';
// import styles from './UserProfile.module.css';

function UserProfile() {
    const { user, setUser, logout } = useContext(AuthContext);
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState('');
    const [profileInfo, setProfileInfo] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (user) {
            setName(user.name);
            setProfileInfo(user.profile_info || '');
        }
    }, [user]);

    const handleSave = () => {
        service2Api.put('/auth/profile', { name, profile_info: profileInfo })
            .then((response) => {
                setUser(response.data.profile); // Обновление пользователя в контексте
                setEditing(false);
            })
            .catch((error) => {
                console.error('Ошибка при сохранении профиля:', error);
                setError('Не удалось сохранить профиль. Попробуйте снова.');
            });
    };

    if (!user) return <div>Загрузка...</div>;

    return (
        <Container maxWidth="sm">
            <Typography variant="h4">Профиль пользователя</Typography>
            {error && <Typography color="error">{error}</Typography>}
            {editing ? (
                <>
                    <TextField
                        label="Имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="О себе"
                        value={profileInfo}
                        onChange={(e) => setProfileInfo(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" onClick={handleSave}>
                        Сохранить
                    </Button>
                    <Button onClick={() => setEditing(false)}>Отмена</Button>
                </>
            ) : (
                <>
                    <Typography variant="h6">Имя: {user.name}</Typography>
                    <Typography variant="body1">О себе: {user.profile_info}</Typography>
                    <Button variant="contained" onClick={() => setEditing(true)}>
                        Редактировать
                    </Button>
                </>
            )}
        </Container>
    );
}

export default UserProfile;