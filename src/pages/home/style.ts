import { styled } from "@mui/material";

export const Container = styled("main")({
  color: "#fff",
  opacity: 0,
  transform: "translateX(-100%)",
  transition: "all 0.5s ease",
  width: "100%",
  maxWidth: 800,
  marginTop: 24,

  "&.fade-in": {
    opacity: 1,
    transform: "translateX(0%)",
  },
});

export const Wrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  width: "100%",
  maxWidth: 800,
  height: 400,
  padding: 24,
});

export const Title = styled("h1")({
  fontSize: 56,
  marginLeft: 15,
});

export const Text = styled("p")({
  fontSize: 20,
  color: "#666666",
  marginLeft: 15,
});

export const B = styled("span")({
  color: "#1e79ff",
});

export const Tag = styled("span")({
  display: "block",
  fontFamily: "Caveat, cursive",
  fontSize: 20,
  color: "silver",
});

export const Button = styled("button")({
  width: 200,
  height: 50,
  fontSize: 20,
  border: "1px solid #1e79ff",
  background: "rgba(0,0,0,0.21)",
  color: "#1e79ff",
  cursor: "pointer",
  transition: "all 0.5s ease",

  "&:hover": {
    transition: "all 0.5s ease",
    background: "rgba(255,255,255,0.21)",
  },
});
