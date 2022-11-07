import { useParams, useSearchParams } from "react-router-dom";
import "./style.scss";

export type PostProps = {
  title?: string;
};

export const Post = ({ title }: PostProps) => {
  const params = useParams();
  const { id } = params;
  const [qs] = useSearchParams();

  return (
    <h1>
      Post {`Param: ${id}`} {`QS: ${qs}`}
    </h1>
  );
};
