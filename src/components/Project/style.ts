import { styled } from "@mui/material";
import Slider from "react-slick";

export const Container = styled("div")({
  marginBottom: 24,
  paddingBottom: 24,
  borderBottom: "1px solid #bcbcbc52",
});

export const BoxButton = styled("div")({
  display: "flex",
  justifyContent: "center",
});

export const Text = styled("h2")({
  color: "white",
  fontSize: 16,
  marginBottom: 24,
  marginLeft: 24,
});

export const Image = styled("img")({
  width: "100%",
  maxWidth: 800,
  height: 453,

  "@media (max-width: 779px)": {
    height: "auto",
  },
});

export const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  width: 420,
  height: 25,
  cursor: "pointer",
  transition: "all 0.5s ease",
  background: "rgba(88,88,88,0.38)",

  "&:hover": {
    background: "rgba(255,255,255,0.32)",
  },
});

export const Button = styled("img")({
  width: 20,
});

export const StyledSlider = styled(Slider)({
  width: "100%",
  margin: "0 auto",
});

export const Link = styled("a")({
  display: "inline-block",
  textDecoration: "none",
  color: "#1e79ff",
  marginBottom: 24,
  fontSize: 26,
  fontWeight: "bold",
  transition: "all 0.5s ease",

  "&:hover": {
    color: "rgba(255,255,255,0.59)",
  },
});
