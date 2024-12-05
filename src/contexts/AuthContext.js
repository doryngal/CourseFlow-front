// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { service1Api } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // Функция для входа
    const login = (token) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
    };

    // Функция для выхода
    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUser(null);
    };

    // Загрузка профиля пользователя при инициализации
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            // Получение профиля пользователя
            service1Api.get('/auth/profile')
                .then((response) => {
                    setUser(response.data.profile); // Обратите внимание на структуру данных
                })
                .catch((error) => {
                    console.error('Ошибка при загрузке профиля:', error);
                    logout();
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, user, setUser, loading }}>
            {children}
        </AuthContext.Provider>
    );
};