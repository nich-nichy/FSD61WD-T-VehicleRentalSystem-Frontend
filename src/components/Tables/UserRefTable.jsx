import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';
import Cookies from "js-cookie";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

const backendUrl = import.meta.env.VITE_BACKEND_URL

const UserRefTable = () => {
    const dispatch = useDispatch();

    // const [rowData, setRowData] = useState([]);
    // const [colDefs] = useState([
    //     { headerName: "ID", field: "id", flex: 1, sortable: true, filter: true },
    //     {
    //         headerName: "Shortened URLs",
    //         field: "Shortened Urls",
    //         flex: 3,
    //         sortable: true,
    //         filter: true,
    //         cellRenderer: (params) => {
    //             return <a href={params.value} target="_blank" rel="noopener noreferrer">{params.value}</a>;
    //         },
    //     },
    //     {
    //         headerName: "Original URLs",
    //         field: "Original URLs",
    //         flex: 3,
    //         sortable: true,
    //         filter: true,
    //         cellRenderer: (params) => {
    //             return <a href={params.value} target="_blank" rel="noopener noreferrer">{params.value}</a>;
    //         },
    //     },
    //     { headerName: "Time Generated", field: "Time", flex: 2, sortable: true, filter: true },
    // ]);
    const [rowData, setRowData] = useState([
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    ]);

    const [colDefs, setColDefs] = useState([
        { field: "make" },
        { field: "model" },
        { field: "price" },
        { field: "electric" }
    ]);


    return (
        <div className="ag-theme-quartz" style={{ height: 230, width: '100%' }}>
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