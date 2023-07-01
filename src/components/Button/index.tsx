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
      href="mailto:oleg220298d@gmail.com"
    >
      {children}
    </a>
  );
};
