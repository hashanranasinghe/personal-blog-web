import React from "react";
import PathConstants from "./PathConstants.jsx";
import HomePage from "../pages/homeview/HomePage.jsx";
import BlogViewPage from "../pages/blogpostview/BlogViewPage.jsx";



const routes = [
  { path: PathConstants.HOME, element: <HomePage /> },
  { path: PathConstants.BLOG_VIEW, element: <BlogViewPage /> },
  // ...
];

export default routes;
