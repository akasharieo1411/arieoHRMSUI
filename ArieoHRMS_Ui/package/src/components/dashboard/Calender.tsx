import { size } from 'lodash';
import React, { useState, useEffect } from 'react';
import Calendar, { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type Value = Date | [Date, Date] | null;

function MyCalendar() {
  const [date, setDate] = useState<Value>(new Date());
  const [isDarkMode, setIsDarkMode] = useState(false);
  const today = new Date();

  // Detect dark mode by checking if any element in the DOM has class "dark"
  useEffect(() => {
    const checkDark = () => {
      const darkModeEnabled = document.querySelector('.dark') !== null;
      setIsDarkMode(darkModeEnabled);
    };

    checkDark(); // Initial check

    const observer = new MutationObserver(() => {
      checkDark();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      subtree: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const handleDateChange: CalendarProps['onChange'] = (value) => {
    setDate(value as Value);
  };

  const isToday = (dateToCheck: Date) =>
    dateToCheck.toDateString() === today.toDateString();

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      maxWidth: '400px',
      padding: '20px',
      borderRadius: '12px',
      backgroundColor: isDarkMode ? '#1a2537' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#333', // Changed to white in dark mode
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      textAlign: 'center',
    },
    heading: {
      marginBottom: '20px',
      fontSize:'20px',
      color: isDarkMode ? '#ffffff' : '#333', // Changed to white in dark mode
    },
    selectedDate: {
      marginTop: '20px',
      fontWeight: 'bold',
      color: isDarkMode ? '#ffffff' : '#555', // Changed to white in dark mode
    },
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>📅 Calendar</h3>
      
      <Calendar
        onChange={handleDateChange}
        value={date ?? undefined}
        tileClassName={({ date }) =>
          isToday(date) ? 'highlight-today' : undefined
        }
        className={isDarkMode ? 'calendar-dark' : ''}
      />
      <p style={styles.selectedDate}>
        {Array.isArray(date)
          ? `Selected: ${date[0]?.toDateString()} - ${date[1]?.toDateString()}`
          : `Selected: ${date?.toDateString() ?? 'None'}`}
      </p>

      {/* CSS Styles */}
      <style>
        {`
          :root {
            --tw-text-opacity: 1;
          }

          .highlight-today {
            background: #0078d4 !important;
            color: white !important;
            border-radius: 6px;
          }

          .react-calendar__tile:hover {
            background-color: #e6f0ff;
            border-radius: 6px;
          }

          .calendar-dark {
            background-color: #1a2537;
            color: #ffffff;
            border-radius: 12px;
          }

          .calendar-dark .react-calendar__month-view__weekdays {
            color: #ffffff;
          }

          .calendar-dark .react-calendar__tile {
            background-color: transparent;
            color: #ffffff;
          }

          .calendar-dark .react-calendar__tile--active {
            background-color: #444 !important;
            color: #fff !important;
          }

          .calendar-dark .react-calendar__tile:hover {
            background-color: #333 !important;
          }

          .calendar-dark .highlight-today {
            background-color: #0a84ff !important;
            color: white !important;
          }
        `}
      </style>
    </div>
  );
}

export default MyCalendar;
