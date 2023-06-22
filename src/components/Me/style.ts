import { styled } from "@mui/material";

export const Aside = styled("aside")({
  opacity: 0,
  transform: "translateY(30%)",
  transition: "all 0.5s ease",
  paddingTop: 24,

  "&.fade-in": {
    opacity: 1,
    transform: "translateX(0)",
  },
});

export const Img = styled("img")({
  width: "100%",
  maxWidth: 350,
  boxShadow: "0px 0px 20px 7px #ffffffa8",
});
