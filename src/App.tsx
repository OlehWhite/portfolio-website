import { Layout } from "./components/Layout";
import { useRoutes } from "react-router-dom";
import { Home } from "./pages/home";
import React from "react";
import { About } from "./pages/about";
import { Projects } from "./pages/projects";
import { Educations } from "./pages/educations";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/projects", element: <Projects /> },
        { path: "/Educations", element: <Educations /> },
      ],
    },
  ]);

  return <div>{element}</div>;
}

export default App;
