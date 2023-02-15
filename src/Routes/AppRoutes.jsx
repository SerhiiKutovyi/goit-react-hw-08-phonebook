import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { lazy } from 'react';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const Home = lazy(() => import('pages/Home/Home'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));
const UserMenu = lazy(() => import('pages/UserMenu/UserMenu'));

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute redirectTo="/usermenu">
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/usermenu">
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/usermenu">
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/usermenu"
            element={
              <PrivateRoute redirectTo="/login">
                <UserMenu />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
