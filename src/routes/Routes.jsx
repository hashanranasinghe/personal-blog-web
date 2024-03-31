import React from "react";
import PathConstants from "./PathConstants.jsx";

const HomePage = React.lazy(() => import("../pages/homeview/HomePage.jsx"));
const BlogViewPage = React.lazy(() => import("../pages/blogpostview/BlogViewPage.jsx"));

const routes = [
  { path: PathConstants.HOME, element: <HomePage /> },
  { path: PathConstants.BLOG_VIEW, element: <BlogViewPage /> },
  // ...
];

export default routes;
