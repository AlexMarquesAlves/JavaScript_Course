import { Link } from "react-router-dom";
import "./style.scss";

export type MenuProps = {
  title?: string;
};

export const Menu = ({ title }: MenuProps) => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
