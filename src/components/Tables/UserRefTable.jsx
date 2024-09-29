import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const UserRefTable = ({ bookings, vehicles, paymentData }) => {
    const [rowData, setRowData] = useState([]);
    const [colDefs, setColDefs] = useState([
        { headerName: "Booking Id", field: "bookingId", flex: 1, sortable: true, filter: true },
        { headerName: "User Name", field: "username", flex: 1, sortable: true, filter: true },
        { headerName: "Vehicle Name", field: "vehicleName", flex: 1, sortable: true, filter: true },
        { headerName: "Vehicle Model", field: "vehicleModel", flex: 1, sortable: true, filter: true },
        { headerName: "Vehicle Type", field: "vehicleType", flex: 1, sortable: true, filter: true },
        { headerName: "Start From", field: "start", flex: 1, sortable: true, filter: true },
        { headerName: "End On", field: "end", flex: 1, sortable: true, filter: true },
        { headerName: "Amount", field: "amount", flex: 1, sortable: true, filter: true },
    ]);

    useEffect(() => {
        const allData = bookings?.map((booking) => {
            const vehicle = vehicles.find(v => v._id === booking.vehicleId);
            return {
                bookingId: booking._id,
                username: booking.user,
                vehicleName: vehicle?.make || 'Unknown',
                vehicleModel: vehicle?.model || 'Unknown',
                vehicleType: vehicle?.type || 'Unknown',
                start: new Date(booking.startDate).toLocaleDateString(),
                end: new Date(booking.endDate).toLocaleDateString(),
                amount: paymentData?.amount || 'N/A',
            };
        });

        setRowData(allData);
    }, [bookings, vehicles, paymentData]);

    return (
        <div className="ag-theme-alpine  shadow-lg rounded-lg" style={{ height: 300, width: '85%' }}>
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

export default UserRefTable;
