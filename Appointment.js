// AppointmentBooking.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import './css/Appointment.css';

const AppointmentBooking = () => {
  const navigate = useNavigate();  

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [isCalendarExpanded, setIsCalendarExpanded] = useState(false);

  const morningTimes = ['9:00', '10:00', '11:00'];
  const afternoonTimes = ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00'];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const generateCalendarDays = () => {

    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const handleSwipe = (event) => {
    const touchDelta = event.changedTouches[0].clientY - event.touches[0].clientY;
    if (touchDelta > 50) {
      setIsCalendarExpanded(true);
    } else if (touchDelta < -50) {
      setIsCalendarExpanded(false);
    }
  };

  const styles = {
    navbar: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'space-around',
      backgroundColor: '#29384D',
      padding: '10px 0',
    },
    navButton: {
      background: 'none',
      border: 'none',
      color: '#888',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    svg: {
      width: '23px',
      height: '23px',
    },
    backButton: {
      background: 'none',
      border: 'none',
      color: 'black',
      fontSize: '20px',
      cursor: 'pointer',
      paddingBottom: '30px',
    },

  };


  const Payment = () => {  
    // You can add authentication logic here  
    navigate('/Payment'); // Navigate to the home page  
  };  
    
  const handleLogin = () => {  
    // You can add authentication logic here  
    navigate('/home'); // Navigate to the home page  
  };  

  const Appointment = () => {  
    // You can add authentication logic here  
    navigate('/Appointment'); // Navigate to the home page  
  };  

  const history = () => {  
    // You can add authentication logic here  
    navigate('/Historya'); // Navigate to the home page  
  };  

  const profile = () => {  
    // You can add authentication logic here  
    navigate('/Userprofile'); // Navigate to the home page  
  };  


  return (
    <div className="appointment-container">
      <div 
        className={`calendar-header ${isCalendarExpanded ? 'expanded' : ''}`}
        onTouchStart={handleSwipe}
        onTouchEnd={handleSwipe}
      >
      <div style={styles.header}>
        <button style={styles.backButton} onClick={handleLogin} >← Appointment</button>
      </div>
        <div className="month-selector">
          <span className="arrow" onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))}>&#8592;</span>
          <h2>{selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
          <span className="arrow" onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))}>&#8594;</span>
        </div>
        <div className={`full-calendar ${isCalendarExpanded ? 'visible' : ''}`}>
          <div className="weekdays">
            {daysOfWeek.map(day => (
              <div key={day} className="weekday">{day}</div>
            ))}
          </div>
          <div className="calendar-grid">
            {generateCalendarDays().map((day, index) => (
              <div 
                key={index} 
                className={`calendar-day ${day && day.getDate() === selectedDate.getDate() ? 'selected' : ''}`}
                onClick={() => day && setSelectedDate(day)}
              >
                {day ? day.getDate() : ''}
              </div>
            ))}
          </div>
        </div>
        <div className={`week-view ${isCalendarExpanded ? 'hidden' : ''}`}>
          {daysOfWeek.map((day, index) => {
            const date = new Date(selectedDate);
            date.setDate(selectedDate.getDate() - selectedDate.getDay() + index);
            return (
              <div key={day} className="day-column">
                <div className="day-name">{day}</div>
                <div
                  className={`day-number ${date.getDate() === selectedDate.getDate() ? 'selected' : ''}`}
                  onClick={() => setSelectedDate(date)}
                >
                  {date.getDate()}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="time-selection">
        <div className="time-section">
          <h3>Morning</h3>
          <div className="time-grid">
            {morningTimes.map((time) => (
              <button
                key={time}
                className={`time-button ${selectedTime === time ? 'selected' : ''}`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
        <div className="time-section">
          <h3>Afternoon</h3>
          <div className="time-grid">
            {afternoonTimes.map((time) => (
              <button
                key={time}
                className={`time-button ${selectedTime === time ? 'selected' : ''}`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="booking-section">
        <button className="book-button" onClick={Payment}  >Book Appointment</button>
      </div>
      <div style={styles.navbar}>
        <button onClick={handleLogin} style={styles.navButton} >
          <svg width="23px" style={styles.svg} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </button>
        <button onClick={Appointment}  style={styles.navButton}>
          <svg width="23px" style={styles.svg} fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
        <button onClick={history}  style={styles.navButton}>
          <svg width="23px" style={styles.svg} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        <button onClick={profile}  style={styles.navButton}>
          <svg width="23px" style={styles.svg} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AppointmentBooking;