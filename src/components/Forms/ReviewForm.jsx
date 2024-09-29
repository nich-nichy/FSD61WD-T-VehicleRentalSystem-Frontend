import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ReviewForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="space-y-4">
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                className="border p-2"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
            ) : null}

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">
                Submit
            </button>
        </form>
    );
}
export default ReviewForm

