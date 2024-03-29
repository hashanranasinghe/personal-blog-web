import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import routes from "./routes/Routes";
import BlogViewPage from "./pages/BlogViewPage";
import LayoutPage from "./components/layouts/LayoutPage";

function App() {
  const router = createBrowserRouter([
    {
      element: <LayoutPage />,
      children: routes,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
