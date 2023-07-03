import { Video, Container, Content, Overlay, Block } from "./style";
import VideoBg from "../../assets/videos/video-bg.mp4";
import { Outlet } from "react-router";
import { Header } from "../Header";
import { Me } from "../Me";

export const Layout = () => {
  return (
    <Container>
      <Video src={VideoBg} autoPlay loop muted />
      <Overlay />
      <Content>
        <Header />
        <Block>
          <Outlet />
          <Me />
        </Block>
      </Content>
    </Container>
  );
};
