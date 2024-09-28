import React from 'react';
import { Formik } from 'formik';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const url = import.meta.env.VITE_BACKEND_URL;

const AdminLogin = () => {
    const { token } = useParams();
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-2xl font-bold text-center mb-4">Hello 👋</h1>
                <p className="text-center mb-6 text-gray-600">Please insert your 16 digit admin token here:</p>
                <Formik
                    initialValues={{ adminToken: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.adminToken) {
                            errors.adminToken = 'Admin token is required';
                        }
                        return errors;
                    }}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                        try {
                            const { data } = await axios.post(
                                `${url}/`
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
                                <label htmlFor="adminToken" className="block text-sm font-medium text-gray-700">Admin Token</label>
                                <input
                                    type="adminToken"
                                    name="adminToken"
                                    placeholder="Enter your adminToken"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.adminToken}
                                    className={`mt-1 block w-full px-3 py-2 border ${touched.adminToken && errors.adminToken ? 'border-red-500' : 'border-gray-300'
                                        } rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500`}
                                />
                                {touched.adminToken && errors.adminToken && (
                                    <div className="text-red-500 text-sm mt-1">{errors.adminToken}</div>
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
            </div>
        </div>
    );
}

export default AdminLogin;
