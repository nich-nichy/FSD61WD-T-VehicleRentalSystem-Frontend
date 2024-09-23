import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const BookingForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            pickupLocation: '',
            dropoffLocation: '',
            pickupDate: '',
            returnDate: '',
            vehicleType: '',
            rentalType: '',
            extras: []
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            pickupLocation: Yup.string().required('Pickup location is required'),
            dropoffLocation: Yup.string().required('Drop-off location is required'),
            pickupDate: Yup.date().required('Pickup date is required'),
            returnDate: Yup.date().required('Return date is required'),
            vehicleType: Yup.string().required('Vehicle type is required'),
            rentalType: Yup.string().required('Rental type is required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="space-y-4">
            {/* Personal Information */}
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

            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                className="border p-2"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
            ) : null}

            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="border p-2"
            />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}

            {/* Pickup/Dropoff Information */}
            <label htmlFor="pickupLocation">Pickup Location</label>
            <input
                id="pickupLocation"
                name="pickupLocation"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pickupLocation}
                className="border p-2"
            />
            {formik.touched.pickupLocation && formik.errors.pickupLocation ? (
                <div>{formik.errors.pickupLocation}</div>
            ) : null}

            <label htmlFor="dropoffLocation">Drop-off Location</label>
            <input
                id="dropoffLocation"
                name="dropoffLocation"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dropoffLocation}
                className="border p-2"
            />
            {formik.touched.dropoffLocation && formik.errors.dropoffLocation ? (
                <div>{formik.errors.dropoffLocation}</div>
            ) : null}

            <label htmlFor="pickupDate">Pickup Date</label>
            <input
                id="pickupDate"
                name="pickupDate"
                type="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pickupDate}
                className="border p-2"
            />
            {formik.touched.pickup}
            <label htmlFor="returnDate">Return Date</label>
            <input
                id="returnDate"
                name="returnDate"
                type="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.returnDate}
                className="border p-2"
            />
            {formik.touched.returnDate && formik.errors.returnDate ? (
                <div>{formik.errors.returnDate}</div>
            ) : null}

            {/* Vehicle and Rental Type */}
            <label htmlFor="vehicleType">Vehicle Type</label>
            <select
                id="vehicleType"
                name="vehicleType"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.vehicleType}
                className="border p-2"
            >
                <option value="" label="Select vehicle type" />
                <option value="car" label="Car" />
                <option value="truck" label="Truck" />
            </select>
            {formik.touched.vehicleType && formik.errors.vehicleType ? (
                <div>{formik.errors.vehicleType}</div>
            ) : null}

            <label htmlFor="rentalType">Rental Type</label>
            <select
                id="rentalType"
                name="rentalType"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rentalType}
                className="border p-2"
            >
                <option value="" label="Select rental type" />
                <option value="day" label="Day" />
                <option value="month" label="Month" />
            </select>
            {formik.touched.rentalType && formik.errors.rentalType ? (
                <div>{formik.errors.rentalType}</div>
            ) : null}

            {/* Extras */}
            <label>Extras</label>
            <div className="space-y-2">
                <div>
                    <input
                        type="checkbox"
                        id="gps"
                        name="extras"
                        value="GPS"
                        onChange={formik.handleChange}
                    />
                    <label htmlFor="gps" className="ml-2">GPS</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="childSeat"
                        name="extras"
                        value="Child Seat"
                        onChange={formik.handleChange}
                    />
                    <label htmlFor="childSeat" className="ml-2">Child Seat</label>
                </div>
            </div>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">
                Submit
            </button>
        </form>
    );
}
export default BookingForm

