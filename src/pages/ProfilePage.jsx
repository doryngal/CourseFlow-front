import React from 'react';
import UserProfile from '../components/Profile/UserProfile';
import { Container } from '@mui/material';
import styles from './ProfilePage.module.css'; // Импорт стилей

function ProfilePage() {
    return (
        <div className={styles.profilePageContainer}>
            <Container className={styles.profileContent}>
                <div className={styles.userProfile}>
                    <h1 className={styles.profileTitle}>Ваш профиль</h1>
                    <UserProfile />
                </div>
            </Container>
        </div>
    );
}

export default ProfilePage;
