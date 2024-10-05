import React from 'react';
import { useNavigate } from 'react-router-dom';  
import './css/Userprofile.css';
import bannerImage from './img/profi.png'; // Make sure the path is correct.  


const ProfilePage = () => {
  const navigate = useNavigate();  

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
          color: 'white',
          fontSize: '20px',
          cursor: 'pointer',
          paddingBottom: '30px',
        },
      
      };


      const logout = () => {  
        // You can add authentication logic here  
        navigate('/'); // Navigate to the home page  
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
    <div className="profile-page">
      <div className="content">
      <div style={styles.header}>
        <button style={styles.backButton} onClick={handleLogin} >← User Profile</button>
      </div>

        <div className="user-info">
          <div className="profile-picture">
              <img  style={styles.bannerImage} src={bannerImage} alt="avatar" />
          </div>
          <h2>User Example</h2>
        </div>

        <div className="main-options">
          {['Account Info', 'Language', 'Dark Mood'].map((item, index) => (
            <button key={index} className="option-button">
              <span>{item}</span>
              {/* <ChevronRight /> */}
            </button>
          ))}
        </div>

        <div className="additional-options">
          {['Help Center', 'Privacy Policy', 'Recommendations'].map((item, index) => (
            <button key={index} className="text-button">
              {item}
            </button>
          ))}
        </div>

        <button onClick={logout}  className="sign-out-button">
          Sign-out
        </button>
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
          <svg width="23px" style={styles.svg} fill="none" stroke="White" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;