import "./style.scss";

export type HomeProps = {
  title?: string;
};

export const Home = ({ title }: HomeProps) => {
  return <h1>Home</h1>;
};
