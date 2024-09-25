import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useVerifyToken } from './utils/VerifyRole';

const ProtectedRoute = ({ element: Component, roles }) => {
    const { username, userRole, isVerified } = useVerifyToken();
    if (!isVerified) return <p>Loading...</p>;
    if (!username) {
        return <Navigate to="/login" />;
    }
    if (!roles.includes(userRole)) {
        return <Navigate to="/" />;
    }
    return <Component />;
};

export default ProtectedRoute;
