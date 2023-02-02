import Register from "./pages/Register/Register";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
// import "./index.css";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import TopBar from "./components/TopBar/TopBar";
import LeftBar from "./components/LeftBar/LeftBar";
import RightBar from "./components/RightBar/RightBar";

function App() {
  const currentUser = true;

  const Layout = () => {
    return (
      <div>
        <TopBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <Outlet />
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) return <Navigate to="/login" />;
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "/profile/:id", element: <Profile /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
