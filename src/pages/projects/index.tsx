import { useEffect, useState } from "react";
import { Container, Text, Title, Wrapper } from "../home/style";

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
        <Title>Projects</Title>
        <Text></Text>
      </Wrapper>
    </Container>
  );
};