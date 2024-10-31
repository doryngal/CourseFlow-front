// services/api.js
import axios from 'axios';

const instance = axios.create({
    baseURL: '/api', // Базовый URL для API
});

// Добавление токена к каждому запросу
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            // Добавляем токен в заголовок Authorization с префиксом 'Bearer '
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default instance;