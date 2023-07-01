import { styled } from "@mui/material";
import Slider from "react-slick";

export const Container = styled("div")({});

export const Wrapper = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const Box = styled("div")({});

export const Title = styled("h2")({
  color: "#1e79ff",
  marginBottom: 24,
});

export const Text = styled("h2")({
  color: "white",
  fontSize: 16,
  marginBottom: 24,
  marginLeft: 24,
});

export const Image = styled("img")({
  width: "100%",
});

export const RightButton = styled("img")({});

export const LeftButton = styled(RightButton)({});

export const StyledSlider = styled(Slider)({
  maxWidth: 695,
  margin: "0 auto",
});
