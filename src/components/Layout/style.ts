import { styled } from "@mui/material";

export const Container = styled("div")({
  width: "100%",
  height: "100vh",
  overflow: "hidden",
});

export const Video = styled("video")({
  position: "fixed",
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const Content = styled("div")({
  position: "absolute",
  width: "100%",
  maxWidth: 1300,
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
});

export const Overlay = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
});
