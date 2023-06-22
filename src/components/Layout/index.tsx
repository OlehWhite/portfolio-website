import { Video, Container, Content, Overlay } from "./style";
import VideoBg from "../../assets/videos/video-bg.mp4";
import { Outlet } from "react-router";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Layout = () => {
  return (
    <Container>
      <Video src={VideoBg} autoPlay loop muted />
      <Overlay />
      <Content>
        <Header />
        <Outlet />
        <Footer />
      </Content>
    </Container>
  );
};
