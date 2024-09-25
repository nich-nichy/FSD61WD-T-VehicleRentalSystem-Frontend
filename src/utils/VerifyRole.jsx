import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

const url = import.meta.env.VITE_BACKEND_URL;

export const useVerifyToken = () => {
    const [username, setUsername] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [isVerified, setIsVerified] = useState(false);
    const navigate = useNavigate();
    const userToken = Cookies.get("token");

    useEffect(() => {
        const verifyCookie = async () => {
            if (!userToken) {
                console.log("No token found!");
                navigate("/login");
                return;
            }
            try {
                const { data } = await axios.post(
                    `${url}/verify-token`,  // Assume this endpoint verifies the token
                    { token: userToken },
                    { withCredentials: true }
                );
                if (data.status) {
                    setUsername(data.user.username);  // Assuming your data contains 'user' object
                    setUserRole(data.user.role);      // Assuming user has a role property
                } else {
                    console.log("User not verified");
                    Cookies.remove("token");
                    navigate("/login");
                }
            } catch (error) {
                console.error("Error verifying user", error);
                Cookies.remove("token");
                navigate("/login");
            } finally {
                setIsVerified(true);  // Whether verified or not, we mark verification as complete
            }
        };

        verifyCookie();
    }, [userToken, navigate]);

    return { username, userRole, isVerified };
};
