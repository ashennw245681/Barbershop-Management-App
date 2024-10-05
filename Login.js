import React from 'react';
import { useNavigate } from 'react-router-dom';  
import avatar from './img/ManHairStyle.gif'; // Make sure the path is correct.  


const Login = () => {
    const navigate = useNavigate();  

  const styles = {

    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '95vh',
      color: 'white',
      padding: '1rem',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#121C24',
    },
    card: {
      width: '100%',
      height:'100%',
      maxWidth: '400px',
    },
    header: {
      textAlign: 'center',
      marginBottom: '2rem',
    },
    img: {
      width: '200px',
      height: '200px',
      backgroundColor: 'white',
      borderRadius: '50%',
      margin: '0 auto 0rem',
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '0rem',
    },
    subtitle: {
      color: '#9CA3AF',
    },
    input: {
      width: '93%',
      padding: '0.75rem',
      marginBottom: '1rem',
      borderRadius: '9px',
      backgroundColor: '#29384D',
      color: 'white',
      border: 'none',
    },
    button: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '24px',
      border: 'none',
      cursor: 'pointer',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    loginButton: {
      backgroundColor: '#F5C754',
      color: 'black',
    },
    signUpButton: {
      backgroundColor: '#29384C',
      color: 'white',
      display: 'flex',  
      alignItems: 'center',  
      justifyContent: 'center',
    },
    divider: {
      display: 'flex',
      alignItems: 'center',
      margin: '1rem 0',
    },
    line: {
      flexGrow: 1,
      height: '1px',
      backgroundColor: '#4B5563',
    },
    orText: {
      padding: '0 1rem',
      color: '#FFFFFF',
      fontSize: '12px',
    },
    socialButtons: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '1rem',
    },
    socialButton: {
      flex: 1,
      padding: '0.75rem',
      borderRadius: '0.25rem',
      backgroundColor: '#29384C',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',  
      alignItems: 'center',  
      justifyContent: 'center',
    },

    svg:{
      padding: '0rem 0.5rem ',
    },

  };


  const handleLogin = () => {  
    // You can add authentication logic here  
    navigate('/home'); // Navigate to the home page  
  };  


  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.avatar}>
            <img  style={styles.img} src={avatar} alt="avatar" />
          </div>
          <h2 style={styles.title}>Welcome Back!</h2>
          <p style={styles.subtitle}>Login to your account</p>
        </div>
        
        <form>  
            <input type="email" placeholder="Email" style={styles.input} />  
            <input type="password" placeholder="Password" style={styles.input} />  
            <button style={{...styles.button, ...styles.loginButton}}  onClick={handleLogin}>  
                Login  
            </button>  
        </form> 
        
        <button style={{...styles.button, ...styles.signUpButton}}>Sign Up</button>
        
        <div style={styles.divider}>
          <div style={styles.line}></div>
          <span style={styles.orText}>Or</span>
          <div style={styles.line}></div>
        </div>
        
        <div style={styles.socialButtons}>
          <button style={styles.socialButton} >
            <svg  width="23px"  style={styles.svg}  className={styles.icon} viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              <path fill="none" d="M1 1h22v22H1z" />
            </svg>
            Google
          </button>
          <button style={styles.socialButton}>
            <svg width="23px" style={styles.svg}  className={styles.icon} viewBox="0 0 24 24">
              <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
          </button>
        </div>
        
        <button style={{...styles.button, ...styles.signUpButton}}>
            <svg width="23px" style={styles.svg} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
          Auto-login with Biometric
        </button>
      </div>
    </div>
  );
};

export default Login;