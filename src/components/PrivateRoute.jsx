import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function PrivateRoute({ children }) {
    const { isAuthenticated, loading } = useContext(AuthContext);

    if (loading) {
        return <div>Загрузка...</div>; // Или любой другой индикатор загрузки
    }

    return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;