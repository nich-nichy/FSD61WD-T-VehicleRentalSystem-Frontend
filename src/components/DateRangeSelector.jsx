import React, { useState } from 'react';
import Model from '../components/Utility-Components/Model'
import { DateRangePicker } from 'react-date-range';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateRangeSelector = ({ ranges, onChange, onSubmit, ...rest }) => {
    const [selectedDateRange, setSelectedDateRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
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
                    minDate={new Date()}
                    staticRanges={[]}
                    inputRanges={[]}
                />
                <div className="text-left position-relative mt-2 mr-3">
                    <button
                        className="bg-sky-700 text-white rounded-l-lg border border-black-950 px-4 py-2 hover:bg-sky-800"
                        onClick={() => setShow(true)}
                    >
                        Save
                    </button>
                    <button
                        className="bg-sky-700 text-white rounded-r-lg border border-black-950 px-4 py-2 hover:bg-sky-800"
                        onClick={onClickClear}
                    >
                        Clear
                    </button>
                </div>
            </div>
            {/* Display selected date range */}
            {show && (
                <div className="h-100 mt-3">
                    <Model component={
                        <div className='text-center'>
                            <h2>These are the selected date</h2>
                            <p className="my-auto d-inline">
                                Start Date: {formatDateDisplay(selectedDateRange.startDate, "Not selected")}{" | "}
                                End Date: {formatDateDisplay(selectedDateRange.endDate, "Not selected")}
                            </p>
                        </div>
                    }
                        setShow={setShow} />
                    <button
                        className="mb-1 btn btn-transparent text-danger"
                        onClick={() => setShow(false)}
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
