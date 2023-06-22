import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Container = styled("div")({});

export const Img = styled("img")({
  width: "100%",
  maxWidth: 50,
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
  color: "white",
  paddingLeft: 20,
  fontSize: 16,
  transition: ".4s",

  "&:hover": {
    transition: ".4s",
    color: "#ff3232",
  },
});
