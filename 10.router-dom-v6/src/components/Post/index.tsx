import "./styles.scss";

export type PostProps = {
  title?: string;
};

export const Post = ({ title }: PostProps) => {
  return (
    <div>
      <h1>Post</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, magni?
        Natus quibusdam asperiores beatae maiores id a voluptatum aperiam
        adipisci sed, ducimus alias eos pariatur voluptates deleniti placeat.
        Placeat, ipsum!
      </p>
    </div>
  );
};
