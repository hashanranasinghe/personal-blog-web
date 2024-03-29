import React from "react";
import PathConstants from "./PathConstants.jsx";

const HomePage = React.lazy(() => import("../pages/HomePage.jsx"));
const BlogViewPage = React.lazy(() => import("../pages/BlogViewPage.jsx"));

const routes = [
  { path: PathConstants.HOME, element: <HomePage /> },
  { path: PathConstants.BLOG_VIEW, element: <BlogViewPage /> },
  // ...
];

export default routes;
