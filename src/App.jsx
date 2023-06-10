import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
