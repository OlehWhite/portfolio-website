import { Container, FirstBlock, Img, Ul, Li, Link } from "./style";
import Logo from "../../assets/icons/logo.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { paths } from "../../pages/paths";

export const Header = () => {
  const [activeButton, setActiveButton] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 200);
  }, []);

  const switchActiveButton = (index: number) => {
    setActiveButton(index);
  };

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
              {paths.map(({ path, name }, index) => (
                <Li key={name}>
                  <Link
                    to={path}
                    onClick={() => switchActiveButton(index)}
                    className={activeButton === index ? "active" : "no-active"}
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
