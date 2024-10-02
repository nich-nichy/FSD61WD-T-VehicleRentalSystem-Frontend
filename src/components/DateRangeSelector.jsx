import React, { useEffect, useState } from 'react';
import Model from '../components/Utility-Components/Model'
import { DateRangePicker } from 'react-date-range';
import { format } from 'date-fns';
import { useSelector, useDispatch } from "react-redux";
import { setIsModalOpen, setSelectedDaysArr } from '../redux/slices/vehicleSlice'
import PropTypes from 'prop-types';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateRangeSelector = ({ ranges, onChange, onSubmit, ...rest }) => {
    const dispatch = useDispatch();
    const [selectedDateRange, setSelectedDateRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection"
    });
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (selectedDateRange) {
            dispatch(setSelectedDaysArr(selectedDateRange));
        }
    }, [selectedDateRange]);

    function formatDateDisplay(date, defaultText) {
        if (!date) return defaultText;
        return format(date, "MM/dd/yyyy");
    }

    const handleSelect = (ranges) => {
        setSelectedDateRange(ranges.selection);
    };

    const onClickClear = () => {
        const defaultRange = {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        };
        setSelectedDateRange(defaultRange);
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
                        onClick={() => {
                            setShow(true)
                            dispatch(setIsModalOpen(true));
                        }
                        }
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
                        <div className='text-center m-10'>
                            <h2 className="text-2xl pb-3">These are the selected date</h2>
                            <p className="my-auto d-inline text-xl">
                                Start Date: <span className='underline bg-yellow-700 py-2 px-1'>{formatDateDisplay(selectedDateRange.startDate, "Not selected")}</span>{" | "}
                                End Date: <span className='underline bg-yellow-700 py-2 px-1'>{formatDateDisplay(selectedDateRange.endDate, "Not selected")}</span>
                            </p>
                        </div>
                    }
                    />
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
