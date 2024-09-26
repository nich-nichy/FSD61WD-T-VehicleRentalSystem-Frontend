import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../redux/slices/authSlice'

const url = import.meta.env.VITE_BACKEND_URL;

export const useVerifyToken = () => {
    const [username, setUsername] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [isVerified, setIsVerified] = useState(false);
    const [userEmail, setUserEmail] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
                    `${url}/verify-token`,
                    { token: userToken },
                    { withCredentials: true }
                );
                console.log("User verified", data);
                if (data.status) {
                    setUsername(data.user);
                    setUserRole(data.role);
                    setUserEmail(data.email);
                    dispatch(setUserDetails({
                        id: data._id,
                        username: data.user,
                        email: data.email,
                        phone: "",
                        address: "",
                        profilePic: "",
                        role: data.role,
                    }))
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
                setIsVerified(true);
            }
        };

        verifyCookie();
    }, [userToken, navigate]);

    return { username, userRole, isVerified, userEmail };
};
