import { FC } from "react";
import "./style.css";

type TButton = {
  children: string;
};

export const Button: FC<TButton> = ({ children }) => {
  return (
    <a
      className="glow-on-hover"
      type="button"
      href="https://www.linkedin.com/in/oleh-bilostotskyi-a535a921b/"
      target="_blank"
    >
      {children}
    </a>
  );
};
