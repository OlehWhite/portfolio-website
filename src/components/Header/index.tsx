import { Container, FirstBlock, Img, Ul, Li, Link } from "./style";
import Logo from "../../assets/icons/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { paths } from "../../pages/paths";

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
          <nav>
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
          </nav>
        </div>
      </FirstBlock>
    </Container>
  );
};
