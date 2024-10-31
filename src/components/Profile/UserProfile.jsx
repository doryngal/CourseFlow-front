// components/Profile/UserProfile.jsx
import { useEffect, useState } from 'react';
import { Typography, TextField, Button, Container } from '@mui/material';
import axios from '../../services/api';

function UserProfile() {
    const [user, setUser] = useState(null);
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState('');
    const [profileInfo, setProfileInfo] = useState('');

    useEffect(() => {
        axios.get('/users/me').then((response) => {
            setUser(response.data);
            setName(response.data.Name);
            setProfileInfo(response.data.ProfileInfo);
        });
    }, []);

    const handleSave = () => {
        axios.put(`/users/${user.ID}`, { Name: name, ProfileInfo: profileInfo }).then(() => {
            setEditing(false);
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
                    <Typography variant="h6">Имя: {user.Name}</Typography>
                    <Typography variant="body1">О себе: {user.ProfileInfo}</Typography>
                    <Button variant="contained" onClick={() => setEditing(true)}>
                        Редактировать
                    </Button>
                </>
            )}
        </Container>
    );
}

export default UserProfile;