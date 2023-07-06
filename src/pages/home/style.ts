import { styled } from "@mui/material";

export const Container = styled("main")({
  color: "#fff",
  opacity: 0,
  transform: "translateX(-100%)",
  transition: "all 0.5s ease",
  width: "100%",
  maxWidth: 800,
  marginTop: 24,
  margin: "0 auto",

  "&.fade-in": {
    opacity: 1,
    transform: "translateX(0%)",
  },
});

export const Wrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  padding: 24,
});

export const Title = styled("h1")({
  fontSize: 56,
  marginLeft: 15,

  "@media (max-width: 779px)": {
    fontSize: 34,
  },
  "@media (max-width: 469px)": {
    fontSize: 24,
  },
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
