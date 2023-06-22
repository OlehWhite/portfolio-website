import { FC } from "react";
import "./style.css";

type TButton = {
  children: string;
};

export const Button: FC<TButton> = ({ children }) => {
  return (
    <button className="glow-on-hover" type="button">
      {children}
    </button>
  );
};
