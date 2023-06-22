import { Container, Text, Title, Wrapper } from "../../pages/home/style";
import { useEffect, useState } from "react";

export const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 200);
  }, []);

  return (
    <Container className={isLoaded ? "fade-in" : "fade-out"}>
      <Wrapper>
        <Title>About ME</Title>
        <Text></Text>
      </Wrapper>
    </Container>
  );
};
