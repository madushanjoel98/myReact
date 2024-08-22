import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { timeCompar } from '../utils/mystrage';

const ProtectedRoute: React.FC = () => {
    const isAuthenticated = sessionStorage.getItem('c') !== null;
    if (!isAuthenticated) {
        // If not authenticated, redirect to login page 
        return <Navigate to="/login" replace />;
    }
    timeCompar();
    // If authenticated, render the protected content
    return <Outlet />;
};

export default ProtectedRoute;
