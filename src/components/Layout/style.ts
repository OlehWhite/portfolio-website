import { styled } from "@mui/material";

export const Container = styled("div")({
  width: "100%",
  overflow: "hidden",
});

export const Block = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  padding: "0 10px",

  "@media (max-width: 1180px)": {
    justifyContent: "center",
  },
});

export const Video = styled("video")({
  position: "fixed",
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const Content = styled("div")({
  margin: "0 auto",
  width: "100%",
  maxWidth: 1300,
});

export const Overlay = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
});
