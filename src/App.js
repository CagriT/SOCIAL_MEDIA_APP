import Register from "./pages/Register/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./index.css";
import Login from "./pages/Login/Login";

function App() {
  const router = createBrowserRouter([
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
