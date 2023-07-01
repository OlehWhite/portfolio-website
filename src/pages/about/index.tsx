import { B, Container } from "../home/style";
import { Wrapper, Title, Text } from "./style";
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
        <Text>Hello!</Text>
        <Text>
          My name is <B>B</B>ilostotskyi <B>O</B>leh and I started learning
          programming at the end of 2021.
        </Text>
        <Text>
          Now I'm continuing my studies and also working as a freelancer.
        </Text>
        <Text>
          My ultimate goal is to get a full-time offer in my dream IT company.
        </Text>
      </Wrapper>
    </Container>
  );
};
