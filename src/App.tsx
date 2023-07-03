import { Layout } from "./components/Layout";
import { useRoutes } from "react-router-dom";
import { Home } from "./pages/home";
import React from "react";
import { About } from "./pages/about";
import { Projects } from "./pages/projects";
import { Educations } from "./pages/educations";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "@mui/material";

const ScrollStyles = styled("div")`
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #ffffff80;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #00000030;
    border-radius: 4px;
  }
`;

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

  return <ScrollStyles>{element}</ScrollStyles>;
}

export default App;
