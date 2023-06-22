import { Projects } from "./components/Projects";
import { Layout } from "./components/Layout";
import { useRoutes } from "react-router-dom";
import { About } from "./components/About";
import { Home } from "./pages/home";
import React from "react";

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/projects", element: <Projects /> },
      ],
    },
  ]);

  return <div>{element}</div>;
}

export default App;
