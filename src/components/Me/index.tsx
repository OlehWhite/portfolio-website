import IMGMe from "../../assets/icons/me.jpg";
import { Aside, Img } from "./style";
import { useEffect, useState } from "react";

export const Me = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 200);
  }, []);

  return (
    <Aside className={isLoaded ? "fade-in" : ""}>
      <Img src={IMGMe} alt="Bilostotskyi Oleh" title="Bilostotskyi Oleh" />
    </Aside>
  );
};
