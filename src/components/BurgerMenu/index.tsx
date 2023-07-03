import React from "react";
import { Accordion, BoxAccordion, Container, Li, Link, Ul } from "./styled";
import { AccordionSummary, AccordionDetails } from "@mui/material";
import CustomExpandIcon from "./CustomExpandIcon";
import { paths } from "../../pages/paths";

const BurgerMenu = () => {
  return (
    <Container>
      <BoxAccordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<CustomExpandIcon />}
          ></AccordionSummary>
          <AccordionDetails>
            <nav>
              <Ul>
                {paths.map(({ path, name }) => (
                  <Li key={name}>
                    <Link to={path}>{name}</Link>
                  </Li>
                ))}
              </Ul>
            </nav>
          </AccordionDetails>
        </Accordion>
      </BoxAccordion>
    </Container>
  );
};

export default BurgerMenu;
