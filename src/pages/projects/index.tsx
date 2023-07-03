import { Wrapper } from "./style";
import { useEffect, useState } from "react";
import { Container } from "../home/style";
import { Project } from "../../components/Project";
import { positiveResetServices } from "./prsImages";
import { positiveReset } from "./prImages";
import { meditPlus } from "./mpImages";

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
        <Project
          link="https://geekhub-electronic-clinic.vercel.app/"
          title="MediPlus"
          text="We provide the best. Polyclinic MediPlus. Advanced medical technologies, professionalism combined with timely service delivery and individual approach to each patient and situation - this is the philosophy of MediPlus"
          images={meditPlus}
        />
      </Wrapper>
    </Container>
  );
};
