import './App.css';
import { Routes, Route } from 'react-router-dom';
import Splash from './Components/SplashScreen/Splash';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';

function App() {
  return (
   <Routes>
     <Route path="/" element={<Splash />} />
     <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<Register />} />
   </Routes> 
  );
}

export default App;
