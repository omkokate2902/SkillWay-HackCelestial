import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import "./App.css";
import Auth from "./pages/Auth";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    },
      {
    path: "/auth",
      element: <Auth />
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
