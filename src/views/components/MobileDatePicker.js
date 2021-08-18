import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import {Calendar} from '@hassanmojab/react-modern-calendar-datepicker';
import {useState} from "react";
import './MobileDatePicker.css';

const dateToCalendarSpec = (date) => {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  }
}

const MobileDatePicker = (props) => {
  const now = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minimumDate = dateToCalendarSpec(now);
  const defaultFrom = dateToCalendarSpec(now);
  const defaultTo = dateToCalendarSpec(tomorrow);
  const defaultRange = {
    from: defaultFrom,
    to: defaultTo,
  };

  const [selectedDayRange, setSelectedDayRange] = useState(
    defaultRange
  );
  console.log(minimumDate);
  return (<Calendar
    value={selectedDayRange}
    onChange={setSelectedDayRange}
    minimumDate={minimumDate}
    calendarClassName="my-calendar-style"
  />)
}

export default MobileDatePicker;