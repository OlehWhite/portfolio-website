import { styled, Accordion as MUIAccordion } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Container = styled("div")({
  margin: "0 auto",
  paddingTop: 16,
  width: 200,

  "@media (min-width: 471px)": {
    display: "none",
  },
});

export const BoxAccordion = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const Accordion = styled(MUIAccordion)({
  "&:before": {
    backgroundColor: "transparent",
  },
  backgroundColor: "rgba(107,107,107,0.08)",
  boxShadow:
    "-5px -5px 100px rgba(193, 193, 193, 0.1), -58px 248px 102px rgba(204, 204, 204, 0.01), -33px 139px 86px rgba(204, 204, 204, 0.05), -14px 62px 64px rgba(204, 204, 204, 0.09), -4px 15px 35px rgba(204, 204, 204, 0.1), 0px 0px 0px rgba(204, 204, 204, 0.1)",
  marginBottom: "24px",
  width: "100%",
  transition: "all 0.5s ease",

  "&:hover": {
    transition: ".3s",
    background: "rgba(107,107,107,0.13)",
  },
});

export const Ul = styled("ul")({});

export const Li = styled("li")({
  listStyleType: "none",
});

export const Link = styled(NavLink)({
  textDecoration: "none",
  paddingLeft: 20,
  fontSize: 18,
  transition: ".5s",
  color: "#fff",

  "&:hover": {
    transition: ".5s",
    color: "#1e79ff",
  },
});
