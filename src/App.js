import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Splash from './Components/SplashScreen/Splash';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Sidebar from './Components/SideBar/Sidebar';

function App() {
  const user = useSelector((state) => state.user);
  return (
    <>
      {user.logged_in && <Sidebar />}
      <main className="mainCnt">
        <Routes>
          {!user.logged_in && <Route path="/" element={<Splash />} />}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
