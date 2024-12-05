import axios from 'axios';

// Экземпляры Axios для разных сервисов
const service1Api = axios.create({
    baseURL: process.env.REACT_APP_SERVICE1_URL || 'http://localhost:8081',
});

const service2Api = axios.create({
    baseURL: process.env.REACT_APP_SERVICE2_URL || 'http://localhost:8080',
});

// Функция для добавления токена в заголовок Authorization
const addAuthInterceptor = (instance) => {
    instance.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`; // Исправлено: пробел вместо подчёркивания
            }
            return config;
        },
        (error) => Promise.reject(error)
    );
};

// Добавляем интерсепторы к экземплярам
addAuthInterceptor(service1Api);
addAuthInterceptor(service2Api);

// Обработка ответа
const handleResponse = (response) => response;

const handleError = (error) => {
    if (error.response && error.response.status === 401) {
        // Неавторизованный доступ
        localStorage.removeItem('token');
        window.location.href = '/login';
    }
    return Promise.reject(error);
};

service1Api.interceptors.response.use(handleResponse, handleError);
service2Api.interceptors.response.use(handleResponse, handleError);

export { service1Api, service2Api };