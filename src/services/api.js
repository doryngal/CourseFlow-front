// services/api.js
import axios from 'axios';

const instance = axios.create({
    baseURL: '/api', // Базовый URL для API
});

// Добавление токена аутентификации к каждому запросу (если используется)
instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token'); // Получение токена из localStorage
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default instance;