import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Container = styled("div")({
  color: "#fff",
  opacity: 0,
  transition: "all 0.5s ease",

  "&.fade-in": {
    opacity: 1,
    transform: "translateX(0%)",
  },

  "&.fade-out": {
    opacity: 0,
    transform: "translateY(-30%)",
  },
});

export const Img = styled("img")({
  width: "100%",
  maxWidth: 50,
  transition: "all 0.5s ease",
  cursor: "pointer",

  "&:hover": {
    borderRadius: "30%",
    background: "rgba(255,255,255,0.25)",
  },
});

export const FirstBlock = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 20,
  width: "100%",
});

export const Ul = styled("ul")({
  display: "flex",
});

export const Li = styled("li")({
  listStyleType: "none",
});

export const Link = styled(NavLink)({
  textDecoration: "none",
  paddingLeft: 20,
  fontSize: 18,
  transition: ".5s",

  "&:hover": {
    transition: ".5s",
    color: "#1e79ff",
  },
});
