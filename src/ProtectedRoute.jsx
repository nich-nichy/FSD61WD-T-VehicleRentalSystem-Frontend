import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ element: Component, roles }) => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = Cookies.get('adminToken');
        if (!token) {
            Cookies.remove("token");
            Cookies.remove("adminToken");
            navigate('/login');
        }
    }, [navigate, roles]);

    const token = Cookies.get('adminToken');
    return token ? <Component /> : null;
};

export default ProtectedRoute;
