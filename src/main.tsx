import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/index.css";
import IndexPage from "./pages";
import Navigation from "./components/layout/Navigation";
import AboutPage from "./pages/about";
import ExperiencePage from "./pages/experience";
import ProjectPage from "./pages/project";
import BlogPage from "./pages/blog";
import urls from "./data/urls";
import BlogPostPage from "./pages/blog-post";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation>
        <Routes>
          <Route index element={<IndexPage />} />
          <Route path={urls.pages.about} element={<AboutPage />} />
          <Route path={urls.pages.experience} element={<ExperiencePage />} />
          <Route path={urls.pages.projects} element={<ProjectPage />} />
          <Route path={urls.pages.blog} element={<BlogPage />} />
          <Route path={"/blog/:id"} element={<BlogPostPage />} />
        </Routes>
      </Navigation>
    </BrowserRouter>
  </React.StrictMode>
);
