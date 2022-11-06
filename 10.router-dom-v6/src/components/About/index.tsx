import "./style.scss";

export type AboutProps = {
  title?: string;
};

export const About = ({ title }: AboutProps) => {
  return <h1>About</h1>;
};
