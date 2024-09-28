import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useVerifyToken } from './utils/VerifyRole';

const ProtectedRoute = ({ element: Component, roles }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get('adminToken');
        if (!token) {
            navigate('/');
        }
    }, [navigate]);


    if (!isVerified) return <p>Loading...</p>;

    if (!username) {
        return <Navigate to="/admin" />;
    }
    if (!roles.includes(userRole)) {
        return <Navigate to="/" />;
    }
    return <Component />;
};

export default ProtectedRoute;
