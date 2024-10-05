import React from 'react';  
import { useNavigate } from 'react-router-dom';  
import bannerImage from './img/profi.png'; // Make sure the path is correct.  


const BarberProfile = () => {
  const navigate = useNavigate();  

  const specialties = ['Beard Trim', 'Kids Cut', 'Haircut', 'Makeup', 'Facial'];
  const ratings = [
    { stars: 5, percentage: 81 },
    { stars: 4, percentage: 15 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 },
  ];

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      color: 'white',
      backgroundColor: '#121C24',
      height: '100vh',
      padding: '20px',
      boxSizing: 'border-box',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
    },
    backButton: {
      background: 'none',
      border: 'none',
      color: 'white',
      fontSize: '20px',
      cursor: 'pointer',
      top:'20px',
    },
    profile: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    profileImage: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      marginBottom: '10px',
    },
    name: {
      fontSize: '24px',
      fontWeight: 'bold',
      margin: '0',
    },
    location: {
      color: '#888',
      margin: '5px 0',
    },
    buttonContainer: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
    },
    button: {
      flex: 1,
      padding: '10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 'bold',
    },
    bookButton: {
      backgroundColor: '#29384C',
      color: 'white',
      borderRadius: '20px',
    },
    giftButton: {
      backgroundColor: '#F5C754',
      color: '#1A1A1A',
      borderRadius: '20px',
    },
    ratingSection: {
      marginBottom: '20px',
    },
    ratingHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
    },
    ratingScore: {
      display: 'flex',
      alignItems: 'center',
    },
    ratingNumber: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginRight: '10px',
    },
    stars: {
      fontSize: '20px',
    },
    starFilled: {
      color: '#F5C754',
    },
    starEmpty: {
      color: '#444',
    },
    reviewCount: {
      color: '#888',
    },
    ratingBar: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '5px',
    },
    ratingLabel: {
      width: '20px',
      marginRight: '5px',
    },
    ratingBarContainer: {
      flex: 1,
      height: '8px',
      backgroundColor: '#29384C',
      borderRadius: '4px',
      overflow: 'hidden',
    },
    ratingBarFill: {
      height: '100%',
    },
    ratingPercentage: {
      width: '40px',
      textAlign: 'right',
      fontSize: '14px',
      color: '#888',
    },
    specialtiesSection: {
      marginBottom: '20px',
    },
    specialtiesTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    specialtiesList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
    },
    specialtyTag: {
      backgroundColor: '#29384C',
      padding: '5px 10px',
      borderRadius: '15px',
      fontSize: '14px',
    },
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
    <div style={styles.container}>
      <div style={styles.header}>
        <button style={styles.backButton} onClick={handleLogin} >← Barber Profile</button>
      </div>

      <div style={styles.profile}>
      <img  style={styles.bannerImage} src={bannerImage} alt="avatar" />
        <h2 style={styles.name}>Edward S.</h2>
        <p style={styles.location}>San Francisco, CA</p>
      </div>

      <div style={styles.buttonContainer}>
        <button style={{...styles.button, ...styles.bookButton}}  onClick={Appointment}  >Book Now</button>
        <button style={{...styles.button, ...styles.giftButton}} onClick={handleLogin} >Send a Gift</button>
      </div>

      <div style={styles.ratingSection}>
        <div style={styles.ratingHeader}>
          <div style={styles.ratingScore}>
            <span style={styles.ratingNumber}>4.8</span>
            <div style={styles.stars}>
              {[1, 2, 3, 4].map((star) => (
                <span key={star} style={styles.starFilled}>★</span>
              ))}
              <span style={styles.starEmpty}>★</span>
            </div>
          </div>
          <span style={styles.reviewCount}>1.3K reviews</span>
        </div>
        {ratings.map((rating) => (
          <div key={rating.stars} style={styles.ratingBar}>
            <span style={styles.ratingLabel}>{rating.stars}</span>
            <div style={styles.ratingBarContainer}>
              <div 
                style={{
                  ...styles.ratingBarFill,
                  width: `${rating.percentage}%`,
                  backgroundColor: rating.stars === 5 ? '#F5C754' : '#F5C754'
                }}
              ></div>
            </div>
            <span style={styles.ratingPercentage}>{rating.percentage}%</span>
          </div>
        ))}
      </div>

      <div style={styles.specialtiesSection}>
        <h3 style={styles.specialtiesTitle}>Specialties</h3>
        <div style={styles.specialtiesList}>
          {specialties.map((specialty) => (
            <span key={specialty} style={styles.specialtyTag}>{specialty}</span>
          ))}
        </div>
      </div>

      <div style={styles.navbar}>
        <button onClick={handleLogin} style={styles.navButton} >
          <svg width="23px" style={styles.svg} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </button>
        <button onClick={Appointment}  style={styles.navButton}>
          <svg width="23px" style={styles.svg} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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


export default BarberProfile;