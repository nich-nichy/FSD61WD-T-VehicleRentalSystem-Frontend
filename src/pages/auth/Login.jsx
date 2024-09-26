import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik } from 'formik';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';

const url = import.meta.env.VITE_BACKEND_URL;

const Login = () => {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    // FIXME: Change UI
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Image Section for Larger Screens */}
            <div className="hidden md:flex items-center justify-center w-1/2 bg-gray-100">
                <img src="/Login.jpg" alt="Login" className="w-full h-full object-cover" />
            </div>

            {/* Form Section */}
            <div className="flex items-center justify-center w-full md:w-1/2 px-6 py-8">
                <div className="w-full max-w-md">
                    <h1 className="text-4xl font-bold text-center mb-6">Login</h1>

                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validate={(values) => {
                            const errors = {};
                            const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                errors.email = 'Invalid email address';
                            }
                            if (!values.password) {
                                errors.password = 'Required';
                            } else if (!passwordRegex.test(values.password)) {
                                errors.password =
                                    'Password must be at least 6 characters, include at least one special character and one number';
                            }
                            return errors;
                        }}
                        onSubmit={async (values, { setSubmitting, resetForm }) => {
                            try {
                                const { data } = await axios.post(
                                    `${url}/login`,
                                    { email: values.email, password: values.password, isAdmin: false },
                                    { withCredentials: true }
                                );
                                const { success, message, token } = data;
                                Cookies.set('token', token, { expires: 1, secure: true, sameSite: 'None' });
                                if (success) {
                                    Swal.fire({
                                        title: 'Good Job!',
                                        text: message,
                                        icon: 'success',
                                    });
                                    setTimeout(() => navigate('/'), 1000);
                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Login failed',
                                        text: 'Please check your email and password and try again',
                                    });
                                }
                            } catch (error) {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: error.response?.data?.message || 'An error occurred. Please try again later.',
                                });
                            } finally {
                                setSubmitting(false);
                                resetForm();
                            }
                        }}
                    >
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                            <form
                                onSubmit={handleSubmit}
                                className="bg-white shadow-lg rounded-lg p-6 w-full"
                            >
                                {/* Email Field */}
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        className={`mt-1 block w-full rounded-md border ${touched.email && errors.email ? 'border-red-500' : 'border-gray-300'
                                            } p-2`}
                                    />
                                    {touched.email && errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                    )}
                                </div>

                                {/* Password Field */}
                                <div className="mb-4">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        className={`mt-1 block w-full rounded-md border ${touched.password && errors.password ? 'border-red-500' : 'border-gray-300'
                                            } p-2`}
                                    />
                                    {touched.password && errors.password && (
                                        <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 rounded-md"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>

                                <div className="mt-3 text-center">
                                    <p>
                                        Forgot Password?{' '}
                                        <a className="text-sky-500 hover:underline" href="/request-password-reset">
                                            Reset it here
                                        </a>
                                    </p>
                                </div>
                            </form>
                        )}
                    </Formik>

                    <div className="mt-4 text-center mb-3">
                        <p>
                            Not a user?{' '}
                            <a className="text-sky-500 hover:underline" href="/signup">
                                Join us here
                            </a>
                        </p>
                    </div>
                    <hr />
                    <div className="flex justify-center align-center pt-3">
                        <p>Admin ?</p>
                        <label className="inline-flex items-center cursor-pointer px-2">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={isChecked}
                                onChange={handleChange}
                            />
                            <div
                                className={`relative w-11 h-6 bg-gray-200 rounded-full transition-colors peer-focus:ring-4 peer-focus:ring-sky-300 dark:bg-gray-700 dark:peer-focus:ring-sky-800 ${isChecked ? 'peer-checked:bg-sky-600' : ''}`}
                            >
                                <div
                                    className={`absolute top-0.5 left-0 bg-white border border-gray-300 rounded-full h-5 w-5 transition-transform duration-300 ${isChecked ? 'translate-x-5' : 'translate-x-0'} dark:border-gray-600`}
                                />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
