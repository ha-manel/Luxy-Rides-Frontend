import './App.css';
import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from './Components/SideBar/Sidebar';
import routes from './config/routes';

function App() {
  const appRoutes = useRoutes(routes);
  const user = useSelector((state) => state.user);
  return (
    <>
      {user.logged_in && <Sidebar />}
      <main className="mainCnt">{appRoutes}</main>
    </>
  );
}

export default App;
