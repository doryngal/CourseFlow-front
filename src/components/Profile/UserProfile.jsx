import { useEffect, useState, useContext } from 'react';
import { Typography, TextField, Button, Container } from '@mui/material';
import { service2Api } from '../../services/api';
import { AuthContext } from '../../contexts/AuthContext';
// import { styles from } './UserProfile.module.css'; // Если используете стили

function UserProfile() {
    const [user, setUser] = useState(null);
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState('');
    const [profileInfo, setProfileInfo] = useState('');
    const { logout } = useContext(AuthContext);

    useEffect(() => {
        service2Api.get('/auth/profile')
            .then((response) => {
                setUser(response.data);
                setName(response.data.name);
                setProfileInfo(response.data.profileInfo || '');
            })
            .catch((error) => {
                console.error('Ошибка при загрузке профиля:', error);
                if (error.response && error.response.status === 401) {
                    logout();
                }
            });
    }, [logout]);

    const handleSave = () => {
        service2Api.put('/auth/profile', { name, profileInfo })
            .then(() => {
                setEditing(false);
                // Возможно, обновить пользователя
            })
            .catch((error) => {
                console.error('Ошибка при сохранении профиля:', error);
            });
    };

    if (!user) return <div>Загрузка...</div>;

    return (
        <Container maxWidth="sm">
            <Typography variant="h4">Профиль пользователя</Typography>
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
                    <Typography variant="body1">О себе: {user.profileInfo}</Typography>
                    <Button variant="contained" onClick={() => setEditing(true)}>
                        Редактировать
                    </Button>
                </>
            )}
        </Container>
    );
}

export default UserProfile;