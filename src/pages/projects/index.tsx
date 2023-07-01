import { Wrapper } from "./style";
import { useEffect, useState } from "react";
import { Container } from "../home/style";
import { Project } from "../../components/Project";
import { positiveResetServices } from "./prsImages";
import { positiveReset } from "./prImages";

export const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 200);
  }, []);

  return (
    <Container className={isLoaded ? "fade-in" : "fade-out"}>
      <Wrapper>
        <Project
          link="https://www.positiveresetservices.com/"
          title="Positive Reset Services"
          text="POSITIVE RESET SERVICES is a successful franchise company that operates Mental Health Clinics across the United States. We provide a professional system with a proven track record of financial success and positive treatment outcomes."
          images={positiveResetServices}
        />
        <Project
          link="https://positivereset.com/"
          title="Positive Reset"
          text="New Jersey Mental Health Clinic offers psychotherapy; medication management, comprehensive assessment, diagnosis and treatment of a full range of behavioral disorders."
          images={positiveReset}
        />
      </Wrapper>
    </Container>
  );
};
