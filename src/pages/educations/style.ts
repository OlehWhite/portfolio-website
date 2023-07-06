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
  width: "100%",
  padding: 24,
  boxSizing: "border-box",
});

export const Title = styled("a")({
  textDecoration: "none",
  color: "#1e79ff",
  fontWeight: 600,
  fontSize: 20,
  transition: "all 0.5s ease",

  "&:hover": {
    color: "rgba(255,255,255,0.59)",
  },
});

export const Text = styled("p")({
  fontSize: 18,
  color: "BCBCBCFF",
  margin: 15,
});

export const Tag = styled("span")({
  display: "block",
  fontFamily: "Caveat, cursive",
  fontSize: 20,
  color: "silver",
});

export const Box = styled("div")({
  marginTop: 24,
  borderBottom: "1px solid #bcbcbc52",
  paddingBottom: 24,
});

export const Time = styled("h2")({
  fontSize: 18,
});

export const Block = styled("div")({
  display: "flex",
  justifyContent: "space-between",

  "@media (max-width: 490px)": {
    display: "block",
  },
});
