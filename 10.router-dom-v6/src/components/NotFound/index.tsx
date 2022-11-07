import "./style.scss";

export type NotFoundProps = {
  title?: string;
};

export const NotFound = ({ title }: NotFoundProps) => {
  return <h1>Page not found.</h1>;
};
