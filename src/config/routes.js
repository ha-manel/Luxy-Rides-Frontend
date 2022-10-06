import PrivateRoutes from '../Components/PrivateRoutes/PrivateRoutes';
import Splash from '../Components/SplashScreen/Splash';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import Home from '../Components/Home/Home';
import CarDetails from '../Components/CarDetails/CarDetails';
import AddCar from '../Components/AddCar/AddCar';
import DeleteCar from '../Components/DeleteCar/DeleteCar';
import Reserve from '../Components/Reserve/Reserve';
import MyReservations from '../Components/MyReservations/MyReservations';

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
        path: '/reserve/:id',
        element: <Reserve />,
      },
      {
        path: '/reservations',
        element: <MyReservations />,
      },
      {
        path: '/add-car',
        element: <AddCar />,
      },
      {
        path: '/delete-car',
        element: <DeleteCar />,
      },
      {
        path: '/car/:id',
        element: <CarDetails />,
      },
    ],
  },
];

export default routes;
