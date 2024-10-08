# Vehicle Renting System (Task) 🚗

![Image Alt](https://github.com/nich-nichy/3d-Portfolio/blob/ffb229a5463e09d9f6ea69c52dddf5b75493c815/src/assets/images/ors.png)

## Overview
This **Vehicle Renting System** named **ORS** is a full-stack MERN application that allows users to rent vehicles of various types including cars, and trucks. It offers a seamless user experience for browsing vehicle listings, managing bookings, processing payments, and submitting reviews. The platform also includes robust admin features for managing vehicles, tracking rentals, and overseeing customer activity.

⚠️ **Note:** All payment credentials, bookings, and transactions in this system are simulated for development and demonstration purposes only. No real payments are processed.

---

## Features

### 🚗 Vehicle Listings
- Browse a wide range of vehicles available for rent, categorized by type (cars, trucks, heavy vehicles, etc.).
- Each listing includes detailed information about the vehicle, availability status, and pricing.

### 💳 Payment Processing
- Integration added **PayPal** to simulate payment processing for booking vehicles.
- Confirmation of payment and booking details after a successful transaction.
- **Note:** All payment processes are fake and implemented for demonstration purposes only.

### ⭐ User Reviews
- Users can leave reviews for vehicles they have rented.
- Review pages display feedback from multiple users, helping others make informed decisions.

### 👤 User Features
- **Sign-up/Login**: Users can create accounts, log in, and manage their bookings.
- **Profile Management**: Users can update their profile, including uploading profile pictures.
- **Booking History**: Track past and current bookings.
- **Cancel Booking**: Option to cancel a booking with email notifications.
- **Secure Authentication**: Powered by cookies and JWT for a secure and seamless login experience.

### 🛠️ Admin Features
- **Admin Authentication**: Admins have a unique login flow using pre-generated tokens.
- **Booking Management**: Track and manage all bookings. Admins can manually adjust vehicle statuses.
- **Review Moderation**: Admins can view and moderate user reviews to ensure quality feedback.
- **Dashboard Overview**: Comprehensive admin dashboard with metrics on vehicle availability, bookings, and user activities.

---

## Tech Stack

### Frontend
- **React**: For building a dynamic, responsive, and interactive UI.
- **Redux**: Used for managing global application state.
- **Tailwind CSS**: Provides utility-first CSS for responsive, fast, and customizable design.

### Backend
- **Node.js** & **Express**: Backend server with RESTful APIs for vehicle listings, user authentication, bookings, and payments.
- **MongoDB**: NoSQL database for storing vehicle data, user profiles, bookings, and reviews.
  
---

## Validation, Table, and Packages

- Formik & Yup: Schema-based form validation across user authentication, booking forms, and profile updates ensures that user input is secure and accurate.
- AGgrid Community: Provides advanced features like sorting, filtering, and pagination for displaying data-rich tables, such as past bookings and admin panels.
- Nodemailer: Automated email handling for booking confirmations, cancellations, and payment notifications using a secure mail configuration.
- Pdfkit: Dynamically generates PDF invoices based on booking details, providing users with downloadable receipts.

  
---

## Getting Started

### Prerequisites
To run this project, you need to have the following installed on your machine:
- **Node.js** (v14 or higher)
- **MongoDB** (local or cloud instance)
- **Razorpay/PayPal** sandbox accounts for testing payments (optional)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nich-nichy/FSD61WD-T-VehicleRentalSystem-Frontend
   cd vehicle-renting-system

Here we go...

