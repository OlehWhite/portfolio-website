import { Container, Wrapper, Title, Text, B, Tag } from "./style";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";

export const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 200);
  }, []);

  return (
    <Container className={isLoaded ? "fade-in" : "fade-out"}>
      <Tag>{"<html>"}</Tag>
      <Tag style={{ marginLeft: "15px" }}>{"<body>"}</Tag>
      <Wrapper>
        <div>
          <Tag>{"<h1>"}</Tag>
          <Title>
            Hi,
            <br />
            I`m <B>B</B>ilostotskyi <B>O</B>leh,
            <br />
            web developer
          </Title>
          <Tag>{"</h1>"}</Tag>
          <div style={{ marginTop: 24 }}>
            <Tag>{"<p>"}</Tag>
            <Text>
              Front End Developer / <B>React</B>
            </Text>
            <Tag>{"</p>"}</Tag>
          </div>
        </div>
      </Wrapper>
      <div style={{ marginLeft: "25px" }}>
        <Tag>{"<button>"}</Tag>
        <Button children={"Click me!"} />
        <Tag>{"</button>"}</Tag>
      </div>
      <div style={{ marginTop: "24px" }}>
        <Tag style={{ marginLeft: "15px" }}>{"</body>"}</Tag>
        <Tag>{"</html>"}</Tag>
      </div>
    </Container>
  );
};
