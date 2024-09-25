import React from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import Cookies from "js-cookie";
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/Signup.css'

const url = import.meta.env.VITE_BACKEND_URL;

const SignUp = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="d-flex">
                <Container fluid className="d-flex align-items-center justify-content-center min-vh-100" style={{ width: "85%" }}>
                    <Row className="w-75">
                        <Col className="mx-auto">
                            <h1 className="text-center mb-4">Sign Up</h1>
                            <Formik
                                initialValues={{ username: '', email: '', password: '' }}
                                validate={values => {
                                    const errors = {};
                                    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
                                    if (!values.username) {
                                        errors.username = 'Required';
                                    } else if (values.username.length <= 2 || values.username.length >= 20) {
                                        errors.username = 'Must be more than 2 characters and less than 20 characters';
                                    }
                                    if (!values.email) {
                                        errors.email = 'Required';
                                    } else if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                    ) {
                                        errors.email = 'Invalid email address';
                                    }
                                    if (!values.password) {
                                        errors.password = 'Required';
                                    } else if (!passwordRegex.test(values.password)) {
                                        errors.password = 'Password must be at least 6 characters, include at least one special character and one number';
                                    }
                                    return errors;
                                }}
                                onSubmit={async (values, { setSubmitting }) => {
                                    try {
                                        const { data } = await axios.post(
                                            `${url}/signup`,
                                            { email: values.email, password: values.password, username: values.username },
                                            { withCredentials: true }
                                        );
                                        const { success, message, token } = data;
                                        Cookies.set("token", token, { expires: 1, secure: true, sameSite: 'None' });
                                        if (success) {
                                            Swal.fire({
                                                title: "Good Job!",
                                                text: "Signup successful!",
                                                icon: "success"
                                            });
                                            setTimeout(() => {
                                                navigate("/");
                                            }, 1000);
                                        } else {
                                            Swal.fire({
                                                icon: "error",
                                                title: "Oops...",
                                                text: message
                                            });
                                        }
                                    } catch (error) {
                                        console.error(error);
                                        Swal.fire({
                                            icon: "error",
                                            title: "Oops...",
                                            text: error
                                        });
                                    } finally {
                                        setSubmitting(false);
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
                                    <Form onSubmit={handleSubmit} className="p-4 rounded w-100 signup-card" style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px', backgroundColor: "#fff !important" }}>
                                        <Form.Group controlId="formUsername">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="username"
                                                placeholder="Enter your username"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.username}
                                                isInvalid={touched.username && !!errors.username}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.username}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group controlId="formEmail" className="mt-3">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                isInvalid={touched.email && !!errors.email}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.email}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group controlId="formPassword" className="mt-3">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                name="password"
                                                placeholder="Enter your password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password}
                                                isInvalid={touched.password && !!errors.password}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.password}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Button
                                            className="mt-4 w-100 submit-btn"
                                            type="submit"
                                            disabled={isSubmitting}
                                        >
                                            Submit
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
                            <div className="mt-3 text-center">
                                <p>Already a user? <a className="text-decoration-none primary" href="/login">Login</a> here</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="d-none d-md-flex align-items-center justify-content-center min-vh-100">
                    <img src="/Signup.jpg" alt="Signup" className="login-img" />
                </Container>
            </div >
        </>
    );
};

export default SignUp;