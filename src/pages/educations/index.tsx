import { useEffect, useState } from "react";
import { Container, Text, Title, Wrapper } from "../home/style";

export const Educations = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 200);
  }, []);

  return (
    <Container className={isLoaded ? "fade-in" : "fade-out"}>
      <Wrapper>
        <Title>Educations</Title>
        <Text></Text>
      </Wrapper>
    </Container>
  );
};
