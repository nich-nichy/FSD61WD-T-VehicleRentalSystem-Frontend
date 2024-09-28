import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import Swal from 'sweetalert2';
import axios from "axios";

const url = import.meta.env.VITE_BACKEND_URL;

const RequestPassword = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-2xl font-bold text-center mb-4">Reset Password</h1>
                <p className="text-center mb-6 text-gray-600">Please insert your email here</p>

                <Formik
                    initialValues={{ email: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                        const { data } = await axios.post(
                            `${url}/check-user`,
                            { email: values.email },
                            { withCredentials: true }
                        );
                        const { status } = data;

                        if (status === false) {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "User not found!",
                            });
                        } else {
                            try {
                                Swal.fire({
                                    title: "Password reset!",
                                    text: "Request has been initiated!",
                                    icon: "success"
                                });
                                await axios.post(`${url}/reset-request`, {
                                    email: values.email,
                                });

                                setTimeout(() => {
                                    navigate("/info");
                                }, 1000);
                            } catch (error) {
                                console.error("Password reset error: ", error);
                                Swal.fire({
                                    icon: "error",
                                    title: "Oops...",
                                    text: "Something went wrong!",
                                });
                            } finally {
                                setSubmitting(false);
                                resetForm();
                            }
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
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    className={`mt-1 block w-full px-3 py-2 border ${touched.email && errors.email ? 'border-red-500' : 'border-gray-300'
                                        } rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500`}
                                />
                                {touched.email && errors.email ? (
                                    <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                                ) : null}
                            </div>

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
                    <p className="text-gray-600">Remembered the password? <a href="/login" className="text-sky-500 hover:underline">Login</a></p>
                </div>
            </div>
        </div>
    );
};

export default RequestPassword;
