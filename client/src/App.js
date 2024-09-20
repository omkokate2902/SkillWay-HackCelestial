import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      path: '/file',
      element: <h1>hiiii</h1>
    },


  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
