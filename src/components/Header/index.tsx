import { Container, FirstBlock, Img, Ul, Li, Link, Nav } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/logo.png";
import { useEffect, useState } from "react";
import { paths } from "../../pages/paths";
import BurgerMenu from "../BurgerMenu";

export const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 200);
  }, []);

  const reloadPage = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <Container className={isLoaded ? "fade-in" : "fade-out"}>
      <FirstBlock>
        <div>
          <Img src={Logo} alt="Logo" title="Logo" onClick={reloadPage} />
        </div>
        <div>
          <Nav>
            <Ul>
              {paths.map(({ path, name }) => (
                <Li key={name}>
                  <Link
                    to={path}
                    className={
                      location.pathname === path ? "active" : "no-active"
                    }
                  >
                    {name}
                  </Link>
                </Li>
              ))}
            </Ul>
          </Nav>
          <BurgerMenu />
        </div>
      </FirstBlock>
    </Container>
  );
};
