import { styled } from "@mui/material";

export const Wrapper = styled("div")({
  width: "100%",
  padding: "62px 24px",

  "@media (max-width: 850px)": {
    padding: 0,
  },
});

export const Text = styled("p")({
  marginTop: 24,
  fontSize: 22,
  color: "#ffffff",
});
