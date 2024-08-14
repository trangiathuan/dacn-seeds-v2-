import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Element, ...rest }) => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role');

    if (!token || userRole !== 'admin') {
        return <Navigate to="/login" replace />;
    }

    return <Route {...rest} element={<Element />} />;
};

export default ProtectedRoute;
