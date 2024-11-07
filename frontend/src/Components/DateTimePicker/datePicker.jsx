import React from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function DatePickerTime (){
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return(
        <div>
            <DatePicker
                selected = {selectedDate}
                onChange = {handleDateChange}
                dateFormat = "dd/MM/YYYY; hh:mm"
                showTimeSelect
                timeIntervals={30}
                timeFormat="hh:mm"
            />
        </div>
    );
}
export default DatePickerTime;