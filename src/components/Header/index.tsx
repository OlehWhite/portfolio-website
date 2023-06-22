import { Container, FirstBlock, Img, Ul, Li, Link } from "./style";
import Logo from "../../assets/icons/logo.png";
import { paths } from "../../pages/paths";

export const Header = () => {
  return (
    <Container>
      <FirstBlock>
        <div>
          <Img src={Logo} alt="Logo" title="Logo" />
        </div>
        <div>
          <nav>
            <Ul>
              {paths.map(({ path, name }) => (
                <Li key={name}>
                  <Link to={path}>{name}</Link>
                </Li>
              ))}
            </Ul>
          </nav>
        </div>
      </FirstBlock>
    </Container>
  );
};
