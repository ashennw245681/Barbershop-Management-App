import React from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Login from './Login';  
import Home from './Home';  
import Payment from './Payment';  
import Userprofile from './Userprofile';  
import Historya from './Historya';  
import BarberProfile from './BarberProfile';  
import Appointment from './Appointment';  

const App = () => {  
  return (  
    <Router>  
      <Routes>  
        <Route path="/" element={<Login />} />  
        <Route path="/home" element={<Home />} />  
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Userprofile" element={<Userprofile />} />  
        <Route path="/Historya" element={<Historya />} />  
        <Route path="/BarberProfile" element={<BarberProfile />} />  
        <Route path="/Appointment" element={<Appointment />} />  
      </Routes>  
    </Router>  
  );  
};  

export default App;