import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/Routes";
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
