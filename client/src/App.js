import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { useState, useEffect } from "react";
import "./App.css";
import CreateTest from "./pages/CreateTest";
import ExploreTests from "./pages/ExploreTests";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "");

  useEffect(() => {
    console.log(userId, "<== this here it is");
  }, [userId]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/home",
      element: <Dashboard />,
    },
    {
      path: "/createtest",
      element: <CreateTest />,
    },
    {
      path: "/Register",
      element: <Register />,
    },
    {
      path: "/profile",
      element: <Profile token={token} userId={userId} />,
    },
    {
      path: "/login",
      element: <Login setToken={setToken} setUserId={setUserId} />,
    },
    {
      path: "/explore",
      element: <ExploreTests />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
