import { useState, useEffect, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import { useSelector, useDispatch } from "react-redux";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import AdminNavbar from "../AdminNavbar";
import { setMode } from "../../../redux/slices/adminSlice"
import { useNavigate } from "react-router-dom";

const AdminGrid = () => {
    const [rowData, setRowData] = useState([]);
    const [colDefs, setColDefs] = useState([]);
    const adminDataSlice = useSelector((state) => state.adminSlice.adminData.adminFetchData);
    const mode = useSelector((state) => state.adminSlice.adminData.mode);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const bookings = adminDataSlice?.bookings;
    const vehicles = adminDataSlice?.vehicles;
    const paymentData = adminDataSlice?.payments;
    const users = adminDataSlice?.users;
    console.log(mode)
    const allData = useMemo(() => {
        if (mode === "bookings") {
            return bookings?.map((booking) => ({
                bookingId: booking._id,
                userId: booking.userId,
                vehicleId: booking.vehicleId,
                startDate: new Date(booking.startDate.$date).toLocaleDateString(),
                endDate: new Date(booking.endDate.$date).toLocaleDateString(),
                status: booking.status,
                totalPrice: booking.totalPrice,
            }));
        } else if (mode === "payments") {
            return paymentData?.map((payment) => ({
                paymentId: payment._id,
                userId: payment.userId,
                bookingId: payment.bookingId,
                status: payment.status,
                amount: payment.amount,
                paymentMethod: payment.paymentMethod,
                paymentStatus: payment.paymentStatus,
                createdAt: new Date(payment.createdAt.$date).toLocaleDateString(),
            }));
        } else if (mode === "listings") {
            return vehicles?.map((vehicle) => ({
                vehicleId: vehicle._id,
                make: vehicle.make,
                model: vehicle.model,
                year: vehicle.year,
                type: vehicle.type,
                pricePerDay: vehicle.pricePerDay,
                location: vehicle.location,
                available: vehicle.available,
                createdAt: new Date(vehicle.createdAt.$date).toLocaleDateString(),
            }));
        } else if (mode === "users") {
            return users?.map((user) => ({
                userId: user._id,
                email: user.email,
                username: user.username || "N/A",
                bookingsCount: user.bookings?.length || 0,
                reviewsCount: user.reviews?.length || 0,
                createdAt: new Date(user.createdAt.$date).toLocaleDateString(),
            }));
        }
    }, [mode, bookings, paymentData, vehicles, users]);

    const columnDefinitions = useMemo(() => {
        if (mode === "bookings") {
            return [
                { headerName: "Booking ID", field: "bookingId", flex: 1, sortable: true, filter: true },
                { headerName: "User ID", field: "userId", flex: 1, sortable: true, filter: true },
                { headerName: "Vehicle ID", field: "vehicleId", flex: 1, sortable: true, filter: true },
                { headerName: "Start Date", field: "startDate", flex: 1, sortable: true, filter: true },
                { headerName: "End Date", field: "endDate", flex: 1, sortable: true, filter: true },
            ];
        } else if (mode === "payments") {
            return [
                { headerName: "Payment ID", field: "paymentId", flex: 1, sortable: true, filter: true },
                { headerName: "User ID", field: "userId", flex: 1, sortable: true, filter: true },
                { headerName: "Booking ID", field: "bookingId", flex: 1, sortable: true, filter: true },
                { headerName: "Payment Status", field: "paymentStatus", flex: 1, sortable: true, filter: true, valueFormatter: (params) => params.value ? "Completed" : "Pending" },
                { headerName: "Amount", field: "amount", flex: 1, sortable: true, filter: true },
                { headerName: "Payment Method", field: "paymentMethod", flex: 1, sortable: true, filter: true },
                { headerName: "Status", field: "status", flex: 1, sortable: true, filter: true },
                { headerName: "Created At", field: "createdAt", flex: 1, sortable: true, filter: true },
            ];
        } else if (mode === "listings") {
            return [
                { headerName: "Vehicle ID", field: "vehicleId", flex: 1, sortable: true, filter: true },
                { headerName: "Make", field: "make", flex: 1, sortable: true, filter: true },
                { headerName: "Model", field: "model", flex: 1, sortable: true, filter: true },
                { headerName: "Year", field: "year", flex: 1, sortable: true, filter: true },
                { headerName: "Price Per Day", field: "pricePerDay", flex: 1, sortable: true, filter: true },
            ];
        } else if (mode === "users") {
            return [
                { headerName: "User ID", field: "userId", flex: 1, sortable: true, filter: true },
                { headerName: "Email", field: "email", flex: 1, sortable: true, filter: true },
                { headerName: "Username", field: "username", flex: 1, sortable: true, filter: true },
                { headerName: "Reviews Count", field: "reviewsCount", flex: 1, sortable: true, filter: true },
            ];
        }
    }, [mode]);

    useEffect(() => {
        setRowData(allData);
        setColDefs(columnDefinitions);
    }, [allData, columnDefinitions]);

    useEffect(() => {
        if (!adminDataSlice) {
            navigate("/admin")
            dispatch(setMode("dashboard"))
        }
    }, [adminDataSlice])

    return (
        <>
            <AdminNavbar mode={mode} />
            <div className="flex justify-center items-center mt-5">
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
            </div>

        </>
    );
};

export default AdminGrid;

