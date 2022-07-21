import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import Home from 'src/pages/Home';
import Login from 'src/pages/Login';
import Header from 'src/ui/Header';
import { useAuthState } from './store/authAtom';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

const PublicRoute = () => {
  const currentToken = useAuthState();
  if (currentToken) {
    return <Navigate to='/' />;
  }
  return <Outlet />;
};

const PrivateRoute = () => {
  const currentToken = useAuthState();
  if (!currentToken) {
    return <Navigate to='/login' />;
  }
  return <Outlet />;
};
