// import React, { useState } from "react";
// import { DateRangePicker } from "react-date-range";
// import { defaultStaticRanges } from "./defaultRanges";
// import { format } from "date-fns";

// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css"; // theme css file

// import PropTypes from "prop-types";

// const DateRangeSelector = ({ ranges, onChange, onSubmit, ...rest }) => {
//     const [selectedDateRange, setSelectedDateRange] = useState({
//         startDate: new Date(),
//         endDate: new Date(),
//         key: "selection"
//     });
//     const [show, setShow] = useState(false);

//     function formatDateDisplay(date, defaultText) {
//         if (!date) return defaultText;
//         return format(date, "MM/DD/YYYY");
//     }

//     const handleSelect = ranges => {
//         setSelectedDateRange(ranges.selection);
//         console.log(ranges.selection);
//     };

//     // const onClickDone = () => {
//     //      onSubmit(selectedDateRange);
//     //      setShow(true);
//     // };

//     const onClickClear = () => {
//         setSelectedDateRange({
//             startDate: new Date(),
//             endDate: new Date(),
//             key: "selection"
//         });
//         setShow(false);
//     };

//     return (
//         <React.Fragment>
//             <div className="shadow d-inline-block">
//                 <DateRangePicker
//                     onChange={handleSelect}
//                     showSelectionPreview={true}
//                     moveRangeOnFirstSelection={false}
//                     months={2}
//                     ranges={[selectedDateRange]}
//                     direction="horizontal"
//                 />
//                 <div className="text-right position-relative rdr-buttons-position mt-2 mr-3">
//                     <button
//                         className="btn btn-transparent text-primary rounded-0 px-4 mr-2"
//                         onClick={() => setShow(true)}
//                     >
//                         Save
//                     </button>
//                     <button
//                         className="btn btn-transparent text-danger rounded-0 px-4"
//                         onClick={onClickClear}
//                     >
//                         Clear
//                     </button>
//                 </div>
//             </div>

//             {show && <div className="h-100 mt-3 alert alert-transparent">
//                 <p className="my-auto d-inline">Start Date :{" "}
//                     {formatDateDisplay(selectedDateRange.startDate)}{" | "}
//                     End Date :{" "}
//                     {formatDateDisplay(selectedDateRange.endDate)}
//                 </p>
//                 <button className="mb-1 btn btn-transparent text-danger" onClick={() => setShow(false)} variant="outline-success"> Close</button>
//             </div>}
//         </React.Fragment>
//     );
// };

// DateRangeSelector.defaultProps = {
//     ranges: defaultStaticRanges
// };

// DateRangeSelector.propTypes = {
//     onSubmit: PropTypes.func
// };

// export default DateRangeSelector;


import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { format } from 'date-fns'; // Import date formatting utility
import PropTypes from 'prop-types';

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const DateRangeSelector = ({ ranges, onChange, onSubmit, ...rest }) => {
    const [selectedDateRange, setSelectedDateRange] = useState({
        startDate: new Date(), // Start with today
        endDate: new Date(),   // End with today
        key: "selection"
    });
    const [show, setShow] = useState(false);

    // Helper function to format date display
    function formatDateDisplay(date, defaultText) {
        if (!date) return defaultText;
        return format(date, "MM/dd/yyyy");
    }

    // Handle date selection
    const handleSelect = (ranges) => {
        setSelectedDateRange(ranges.selection);
        console.log(ranges.selection);
    };

    // Clear the date selection (reset to today)
    const onClickClear = () => {
        setSelectedDateRange({
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        });
        setShow(false);
    };

    return (
        <React.Fragment>
            <div className="shadow d-inline-block">
                <DateRangePicker
                    onChange={handleSelect}
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={2}
                    ranges={[selectedDateRange]}
                    direction="horizontal"
                    minDate={new Date()} // Prevent selection of past dates
                    staticRanges={[]}    // Remove predefined static ranges
                    inputRanges={[]}     // Remove custom input ranges
                />
                <div className="text-left position-relative rdr-buttons-position mt-2 mr-3">
                    <button
                        className="btn btn-transparent text-primary rounded-0 px-4 mr-2"
                        onClick={() => setShow(true)}
                    >
                        Save
                    </button>
                    <button
                        className="btn btn-transparent text-danger rounded-0 px-4"
                        onClick={onClickClear}
                    >
                        Clear
                    </button>
                </div>
            </div>

            {/* Display selected date range */}
            {show && (
                <div className="h-100 mt-3 alert alert-transparent">
                    <p className="my-auto d-inline">
                        Start Date: {formatDateDisplay(selectedDateRange.startDate, "Not selected")}{" | "}
                        End Date: {formatDateDisplay(selectedDateRange.endDate, "Not selected")}
                    </p>
                    <button
                        className="mb-1 btn btn-transparent text-danger"
                        onClick={() => setShow(false)

                        }
                    >
                        Close
                    </button>
                </div>
            )}
        </React.Fragment>
    );
};

// Default prop
DateRangeSelector.defaultProps = {
    ranges: []
};

// Prop types
DateRangeSelector.propTypes = {
    onSubmit: PropTypes.func
};

export default DateRangeSelector;
