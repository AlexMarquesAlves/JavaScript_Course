import { useLocation } from "react-router-dom";
import "./style.scss";

export type AboutProps = {
  title?: string;
};

export const About = ({ title }: AboutProps) => {
  const { state } = useLocation();

  return (
    <div>
      <h1>About</h1>
      <p>{state as string}</p>
    </div>
  );
};
