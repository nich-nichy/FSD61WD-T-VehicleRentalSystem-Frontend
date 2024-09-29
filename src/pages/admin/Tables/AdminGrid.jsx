import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { useSelector } from "react-redux";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const AdminGrid = () => {
    const [rowData, setRowData] = useState([]);
    const [colDefs, setColDefs] = useState([]);
    const adminDataSlice = useSelector((state) => state.adminSlice.adminData.adminFetchData);
    const mode = useSelector((state) => state.adminSlice.adminData.mode);
    const bookings = adminDataSlice?.bookings
    const vehicles = adminDataSlice?.vehicles
    const paymentData = adminDataSlice?.payments
    const users = adminDataSlice?.users

    useEffect(() => {
        if (mode === "listings") {
            const allData = bookings?.map((booking) => {
                return {
                    bookingId: booking._id?.$oid, // or booking._id depending on how the data is structured
                    userId: booking.userId,
                    vehicleId: booking.vehicleId,
                    startDate: new Date(booking.startDate.$date).toLocaleDateString(),
                    endDate: new Date(booking.endDate.$date).toLocaleDateString(),
                    status: booking.status,
                    totalPrice: booking.totalPrice,
                };
            });
            setRowData(allData);

        } else if (mode === "payments") {
            const allData = paymentData?.map((payment) => {
                return {
                    paymentId: payment._id?.$oid,
                    userId: payment.userId?.$oid,
                    bookingId: payment.bookingId?.$oid,
                    status: payment.status,
                    amount: payment.amount,
                    paymentMethod: payment.paymentMethod,
                    paymentStatus: payment.paymentStatus,
                    createdAt: new Date(payment.createdAt.$date).toLocaleDateString(),
                };
            });
            setRowData(allData);

        } else if (mode === "vehicles") {
            const allData = vehicles?.map((vehicle) => {
                return {
                    vehicleId: vehicle._id?.$oid,
                    make: vehicle.make,
                    model: vehicle.model,
                    year: vehicle.year,
                    type: vehicle.type,
                    pricePerDay: vehicle.pricePerDay,
                    location: vehicle.location,
                    available: vehicle.available,
                    createdAt: new Date(vehicle.createdAt.$date).toLocaleDateString(),
                };
            });
            setRowData(allData);

        } else if (mode === "users") {
            const allData = users?.map((user) => {
                return {
                    userId: user._id?.$oid,
                    email: user.email,
                    username: user.username || "N/A",
                    bookingsCount: user.bookings?.length || 0,
                    reviewsCount: user.reviews?.length || 0,
                    createdAt: new Date(user.createdAt.$date).toLocaleDateString(),
                };
            });
            setRowData(allData);
        }
    }, [mode]);

    useEffect(() => {
        if (mode === "listings") {
            setColDefs([
                { headerName: "Booking ID", field: "_id.$oid", flex: 1, sortable: true, filter: true },
                { headerName: "User ID", field: "userId", flex: 1, sortable: true, filter: true },
                { headerName: "User Name", field: "user", flex: 1, sortable: true, filter: true },
                { headerName: "Email", field: "email", flex: 1, sortable: true, filter: true },
                { headerName: "State", field: "state", flex: 1, sortable: true, filter: true },
                { headerName: "City", field: "city", flex: 1, sortable: true, filter: true },
                { headerName: "Start Date", field: "startDate.$date", flex: 1, sortable: true, filter: true, valueFormatter: (params) => new Date(params.value).toLocaleDateString() },
                { headerName: "End Date", field: "endDate.$date", flex: 1, sortable: true, filter: true, valueFormatter: (params) => new Date(params.value).toLocaleDateString() },
                { headerName: "Status", field: "status", flex: 1, sortable: true, filter: true },
                { headerName: "Total Price", field: "totalPrice", flex: 1, sortable: true, filter: true },
                { headerName: "Created At", field: "createdAt.$date", flex: 1, sortable: true, filter: true, valueFormatter: (params) => new Date(params.value).toLocaleDateString() }
            ]);
        } else if (mode === "payments") {
            setColDefs([
                { headerName: "Payment ID", field: "_id.$oid", flex: 1, sortable: true, filter: true },
                { headerName: "User ID", field: "userId.$oid", flex: 1, sortable: true, filter: true },
                { headerName: "Booking ID", field: "bookingId.$oid", flex: 1, sortable: true, filter: true },
                { headerName: "Payment Status", field: "paymentStatus", flex: 1, sortable: true, filter: true, valueFormatter: (params) => params.value ? "Completed" : "Pending" },
                { headerName: "Amount", field: "amount", flex: 1, sortable: true, filter: true },
                { headerName: "Payment Method", field: "paymentMethod", flex: 1, sortable: true, filter: true },
                { headerName: "Status", field: "status", flex: 1, sortable: true, filter: true, valueFormatter: (params) => params.value ? "Successful" : "Failed" },
                { headerName: "Created At", field: "createdAt.$date", flex: 1, sortable: true, filter: true, valueFormatter: (params) => new Date(params.value).toLocaleDateString() }
            ]);
        } else if (mode === "vehicles") {
            setColDefs([
                { headerName: "Vehicle ID", field: "_id.$oid", flex: 1, sortable: true, filter: true },
                { headerName: "Make", field: "make", flex: 1, sortable: true, filter: true },
                { headerName: "Model", field: "model", flex: 1, sortable: true, filter: true },
                { headerName: "Year", field: "year", flex: 1, sortable: true, filter: true },
                { headerName: "Type", field: "type", flex: 1, sortable: true, filter: true },
                { headerName: "Price Per Day", field: "pricePerDay", flex: 1, sortable: true, filter: true },
                { headerName: "Location", field: "location", flex: 1, sortable: true, filter: true },
                { headerName: "Available", field: "vehicleStatus.available", flex: 1, sortable: true, filter: true, valueFormatter: (params) => params.value ? "Yes" : "No" },
                { headerName: "Booked By", field: "vehicleStatus.bookedBy", flex: 1, sortable: true, filter: true, valueFormatter: (params) => params.value ? params.value : "N/A" },
                { headerName: "On Road From", field: "vehicleStatus.onRoadFrom", flex: 1, sortable: true, filter: true, valueFormatter: (params) => params.value ? new Date(params.value).toLocaleDateString() : "N/A" },
                { headerName: "On Road To", field: "vehicleStatus.onRoadTo", flex: 1, sortable: true, filter: true, valueFormatter: (params) => params.value ? new Date(params.value).toLocaleDateString() : "N/A" },
                { headerName: "Created At", field: "createdAt.$date", flex: 1, sortable: true, filter: true, valueFormatter: (params) => new Date(params.value).toLocaleDateString() },
                { headerName: "Updated At", field: "updatedAt.$date", flex: 1, sortable: true, filter: true, valueFormatter: (params) => new Date(params.value).toLocaleDateString() }
            ]);
        } else if (mode === "users") {
            setColDefs([
                { headerName: "User ID", field: "_id.$oid", flex: 1, sortable: true, filter: true },
                { headerName: "Email", field: "email", flex: 1, sortable: true, filter: true },
                { headerName: "Username", field: "username", flex: 1, sortable: true, filter: true, valueFormatter: (params) => params.value ? params.value : "N/A" },
                { headerName: "Bookings Count", field: "bookings.length", flex: 1, sortable: true, filter: true, valueFormatter: (params) => params.value || 0 },
                { headerName: "Reviews Count", field: "reviews.length", flex: 1, sortable: true, filter: true, valueFormatter: (params) => params.value || 0 },
                { headerName: "Created At", field: "createdAt.$date", flex: 1, sortable: true, filter: true, valueFormatter: (params) => new Date(params.value).toLocaleDateString() }
            ]);
        }
    }, [mode]);


    return (
        <div className="ag-theme-alpine shadow-lg rounded-lg" style={{ height: 500, width: '85%' }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                pagination={true}
                paginationPageSize={5}
                rowHeight={50}
                headerHeight={50}
            />
        </div>
    );
};

export default AdminGrid;
