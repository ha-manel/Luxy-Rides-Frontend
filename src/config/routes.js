import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import PrivateRoutes from '../Components/PrivateRoutes/PrivateRoutes';
import Register from '../Components/Register/Register';
import Reserve from '../Components/Reserve/Reserve';
import Splash from '../Components/SplashScreen/Splash';

const routes = [
  {
    path: '/',
    element: <Splash />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Register />,
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/reserve',
        element: <Reserve />,
      },
      // {
      //   path: '/reservations',
      //   element: <Reservations />,
      // },
      // {
      //   path: '/add-car',
      //   element: <AddCar />,
      // },
      // {
      //   path: '/delete-car',
      //   element: <DeleteCar />,
      // },
    ],
  },
];

export default routes;
