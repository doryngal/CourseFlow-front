// services/api.js
import axios from 'axios';

// Экземпляр для первого микросервиса (порт 8080)
const service1Api = axios.create({
    baseURL: process.env.REACT_APP_SERVICE1_URL || 'http://localhost:8080',
});

// Экземпляр для второго микросервиса (порт 8081)
const service2Api = axios.create({
    baseURL: process.env.REACT_APP_SERVICE2_URL || 'http://localhost:8081',
});

// Функция для добавления токена в заголовок Authorization для каждого запроса
const addAuthInterceptor = (instance) => {
    instance.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer_${token}`; // Замените на 'Bearer ' (с пробелом)
            }
            return config;
        },
        (error) => Promise.reject(error)
    );
};

// Добавляем токен к каждому запросу для обоих сервисов
addAuthInterceptor(service1Api);
addAuthInterceptor(service2Api);

// Экспортируем экземпляры
export { service1Api, service2Api };