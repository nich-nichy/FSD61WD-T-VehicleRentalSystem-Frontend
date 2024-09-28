import React from 'react';
import { Formik } from 'formik';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const url = import.meta.env.VITE_BACKEND_URL;

const ResetPassword = () => {
    const { token } = useParams();
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-2xl font-bold text-center mb-4">Reset Password</h1>
                <p className="text-center mb-6 text-gray-600">Please insert your new password here</p>

                <Formik
                    initialValues={{ password: '', confirmPassword: '' }}
                    validate={values => {
                        const errors = {};
                        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
                        if (!values.password) {
                            errors.password = 'Password is required';
                        } else if (!passwordRegex.test(values.password)) {
                            errors.password = 'Password must be at least 6 characters, include at least one special character and one number';
                        }
                        if (!values.confirmPassword) {
                            errors.confirmPassword = 'Confirm password is required';
                        } else if (values.password !== values.confirmPassword) {
                            errors.message = "Passwords do not match";
                        }
                        return errors;
                    }}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                        try {
                            const { data } = await axios.post(
                                `${url}/reset-password/${token}`,
                                { newPassword: values.confirmPassword },
                                { withCredentials: true }
                            );
                            const { success, message } = data;
                            if (success) {
                                Swal.fire({
                                    title: "Good Job!",
                                    text: message,
                                    icon: "success"
                                });
                                setTimeout(() => {
                                    navigate("/login");
                                }, 1000);
                            }
                        } catch (error) {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: error.response?.data?.message || "Something went wrong"
                            });
                        } finally {
                            setSubmitting(false);
                            resetForm();
                        }
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    className={`mt-1 block w-full px-3 py-2 border ${touched.password && errors.password ? 'border-red-500' : 'border-gray-300'
                                        } rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500`}
                                />
                                {touched.password && errors.password && (
                                    <div className="text-red-500 text-sm mt-1">{errors.password}</div>
                                )}
                            </div>

                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Re-enter your password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirmPassword}
                                    className={`mt-1 block w-full px-3 py-2 border ${touched.confirmPassword && errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                                        } rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500`}
                                />
                                {touched.confirmPassword && errors.confirmPassword && (
                                    <div className="text-red-500 text-sm mt-1">{errors.confirmPassword}</div>
                                )}
                            </div>

                            {errors.message && <div className="text-red-500 mt-2">{errors.message}</div>}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 transition"
                            >
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>

                <div className="mt-4 text-center">
                    <p className="text-gray-600">Remembered the password? Return to <a href="/login" className="text-sky-500 hover:underline">Login</a></p>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
