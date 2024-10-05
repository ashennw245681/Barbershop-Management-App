import React from 'react';  
import { useNavigate } from 'react-router-dom';  
import barberImage from './img/barberImage.png'; // Make sure the path is correct.  
import bannerImage from './img/bannerImage.png'; // Make sure the path is correct.  
import './css/home.css';

import hairStyleImage from './img/HairStyle.png';
import hairCutImage from './img/HairCut.png';
import hairDryerImage from './img/HairDryer.png';
import facialImage from './img/Facial.png';
import hairColorImage from './img/HairColor.png';
import makeupImage from './img/Makeup.png';

const Home = () => {  
  const navigate = useNavigate();  

    const styles = {
        container: {
          backgroundColor: '#121C24',
          color: 'white',
          height: '65%',
          width: '100%',
          maxWidth: '380px',
          margin: '0 auto',
          padding: '15px',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'Arial, sans-serif',
        },

        header: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
        },
        greeting: {
          fontSize: '24px',
          fontWeight: 'bold',
        },
        name: {
          color: '#fbbf24',
          fontStyle: 'italic',
        },
        banner: {
          backgroundColor: '#fbbf24',
          borderRadius: '8px',
          padding: '25px',
          marginBottom: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        bannerText: {
          color: 'black',
          fontSize: '20px',
          fontWeight: 'bold',
        },
        bannerButton: {
          backgroundColor: 'white',
          color: 'black',
          border: 'none',
          borderRadius: '20px',
          padding: '8px 16px',
          marginTop: '8px',
          cursor: 'pointer',
        },
        bannerImage: {
          position: 'absolute',
          width: '175px',
          height: '160px',
          left: '38%',
          top:'38px', 
        },
       

        barbersScroll: {
          display: 'flex',
          overflowX: 'auto',
          paddingBottom: '16px',
        },
        barberCard: {
          flexShrink: 0,
          width: '128px',
          marginRight: '16px',
        },
        barberImage: {
          width: '100%',
          height: '128px',
          backgroundColor: '#4a5568',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
        },
        barberInfo: {
          backgroundColor: '#29384D',
          padding: '8px',
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
        },
        barberName: {
          fontWeight: 'bold',
        },
        barberRating: {
          color: '#fbbf24',
        },
        barberPhone: {
          fontSize: '12px',
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
      const categories = [
        { name: 'Hair Style', image: hairStyleImage },
        { name: 'Hair Cut', image: hairCutImage },
        { name: 'Hair dryer', image: hairDryerImage },
        { name: 'Facial', image: facialImage },
        { name: 'Hair Color', image: hairColorImage },
        { name: 'Makeup', image: makeupImage },
      ];

      const barbers = [
        { name: 'Doe John', rating: 2, phone: '+732 8888 111' },
        { name: 'Doe John', rating: 2, phone: '+732 8888 111' },
        { name: 'Doe John', rating: 2, phone: '+732 8888 111' },
        { name: 'Doe John', rating: 2, phone: '+732 8888 111' },
      ];




      const BarberProfile = () => {  
        // You can add authentication logic here  
        navigate('/BarberProfile'); // Navigate to the home page  
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
            <div>
              <div style={styles.greeting}>Hi</div>
              <div style={{...styles.greeting, ...styles.name}}>Doe John</div>
            </div>
          </div>
    
          <div style={styles.banner}>
            <div>
              <div style={styles.bannerText}>Look Awesome &</div>
              <div style={styles.bannerText}>Save Some</div>
              <button style={styles.bannerButton}>Get Upto 50% off</button>
            </div>
            <div style={styles.bannerImage}>
              <img  style={styles.bannerImage} src={bannerImage} alt="avatar" />
            </div>
          </div>
    
          <div className="salon-categories">
            <h2 className="categories-title">Categories</h2>
            <div className="categories-grid">
              {categories.map((category, index) => (
                <div key={index} className="category-item">
                  <img src={category.image} alt={category.name} className="category-image" />
                  <span className="category-name">{category.name}</span>
                </div>
              ))}
            </div>
          </div>
    
          <div><h2 className="categories-title">Top Barbers</h2> </div>
          <div style={styles.barbersScroll}>
            {barbers.map((barber, index) => (
              <div key={index} style={styles.barberCard} onClick={BarberProfile} >
                <div style={styles.barberImage}>
                  <img  style={styles.barberImage} src={barberImage} alt="avatar" />
                </div>
                <div style={styles.barberInfo}>
                  <div style={styles.barberName}>{barber.name}</div>
                  <div style={styles.barberRating}>{'★'.repeat(barber.rating)}{'☆'.repeat(3 - barber.rating)}</div>
                  <div style={styles.barberPhone}>{barber.phone}</div>
                </div>
              </div>
            ))}
          </div>
    
          <div style={styles.navbar}>
        <button onClick={handleLogin} style={styles.navButton} >
          <svg width="23px" style={styles.svg} fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

export default Home;