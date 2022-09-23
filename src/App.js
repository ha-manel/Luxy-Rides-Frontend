import './App.css';
import { Routes, Route } from 'react-router-dom';
import Splash from './Components/SplashScreen/Splash';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Sidebar from './Components/SideBar/Sidebar';

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
