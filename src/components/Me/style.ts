import { styled } from "@mui/material";

export const Aside = styled("aside")({
  opacity: 1,
  transform: "translateY(0)",
  transition: "opacity 0.5s ease, transform 0.5s ease",
  paddingTop: 24,

  "&.fade-in": {
    opacity: 1,
    transform: "translateY(0)",
  },

  "&.fade-out": {
    opacity: 0,
    transform: "translateY(30%)",
  },

  "@media (max-width: 1180px)": {
    display: "flex",
    justifyContent: "center",
  },
});

export const Img = styled("img")({
  width: "100%",
  maxWidth: 350,
  boxShadow: "0px 0px 20px 7px #ffffffa8",
});

export const Ul = styled("ul")({
  display: "flex",
  flexWrap: "wrap",
  marginTop: 34,
});

export const Li = styled("li")({
  listStyleType: "none",
});

export const Link = styled("a")({
  textDecoration: "none",
});

export const ImgLink = styled("img")({
  width: 50,
  height: 50,
  transition: "all 0.5s ease",

  "&:hover": {
    transition: "all 0.5s ease",
    background: "rgba(255,255,255,0.4)",
    boxShadow: "0px 0px 20px 7px #ffffffa8",
    opacity: 1,
    transform: "translateY(14%)",
  },
});

export const WrapperImg = styled("div")({
  "@media (max-width: 1180px)": {
    display: "none",
  },
});
