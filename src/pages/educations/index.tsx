import { useEffect, useState } from "react";
import { Container, Text, Title, Wrapper, Box, Block, Time } from "./style";

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
        <Box>
          <Block>
            <Title href="https://knutd.edu.ua/" target="_blank">
              Bachelor
            </Title>
            <Time>Sep 2015 - Jun 2019</Time>
          </Block>
          <Text>
            Kyiv National University of Technologies and Design (KNUTD), Kyiv
          </Text>
        </Box>
        <Box>
          <Block>
            <Title
              href="https://www.udemy.com/course/javascript-ru/"
              target="_blank"
            >
              Udemy
            </Title>
            <Time>Mar 2022 - May 2022</Time>
          </Block>
          <Text>JavaScript Full Course</Text>
        </Box>
        <Box>
          <Block>
            <Title href="https://7e.com.ua/" target="_blank">
              7E EDUCATION
            </Title>
            <Time>Apr 2022 - Sep 2022</Time>
          </Block>
          <Text>
            Individual training with mentor:
            <br />
            HTML | CSS | JavaScript | React
          </Text>
        </Box>
        <Box>
          <Block>
            <Title href="https://geekhub.ck.ua/" target="_blank">
              GeekHub
            </Title>
            <Time>Oct 2022 - May 2023</Time>
          </Block>
          <Text>
            Java Script <br />
            HTML | CSS | JS | React | Redux | TypeScript | Node.js
          </Text>
        </Box>
        <Box>
          <Block>
            <Title href="http://svitmov.ck.ua/" target="_blank">
              Svitmov.ck
            </Title>
            <Time>Apr 2023 - Present</Time>
          </Block>
          <Text>English</Text>
        </Box>
      </Wrapper>
    </Container>
  );
};
