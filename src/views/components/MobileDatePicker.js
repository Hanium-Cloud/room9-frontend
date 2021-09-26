import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import {Calendar} from '@hassanmojab/react-modern-calendar-datepicker';
import {useState} from "react";
import './MobileDatePicker.css';

export const dateToCalendarSpec = (date) => {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  }
}

const MobileDatePicker = (props) => {
  const now = new Date();
  const minimumDate = dateToCalendarSpec(now);

  return (<Calendar
    value={props.selectedDayRange}
    onChange={props.onChange}
    minimumDate={minimumDate}
    calendarClassName="my-calendar-style"
  />)
}

export default MobileDatePicker;