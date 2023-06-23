import { B, Container } from "../../pages/home/style";
import { useEffect, useState } from "react";
import { Wrapper, Title, Text } from "./style";

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
        <Text>
          Hello!
          <br />
          My name is <B>B</B>ilostotskyi <B>O</B>leh and I started learning
          programming at the end of 2021.
          <br />
          Now I'm continuing my studies and also working as a freelancer.
          <br />
          My ultimate goal is to get a full-time offer in my dream IT company.
        </Text>
      </Wrapper>
    </Container>
  );
};
