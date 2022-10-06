import './App.css';
import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './Components/SideBar/Sidebar';
import routes from './config/routes';
import { checkUser } from './Redux/User/registerSlice';

const App = () => {
  const appRoutes = useRoutes(routes);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUser());
  }, []);

  return (
    <>
      {user.logged_in && <Sidebar />}
      <main className="mainCnt">{appRoutes}</main>
    </>
  );
};

export default App;
