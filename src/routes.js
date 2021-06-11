import { Navigate } from 'react-router-dom';
import Login from './pages/login/login';
import NotFound from './pages/not-found/not-found';

const routes = [
  {
    path: '/',
    // element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
    //   { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/login" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
