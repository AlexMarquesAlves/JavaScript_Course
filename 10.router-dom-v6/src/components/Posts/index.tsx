import { Outlet, useParams, useSearchParams } from "react-router-dom";
import "./style.scss";

export type PostsProps = {
  title?: string;
};

export const Posts = ({ title }: PostsProps) => {
  const params = useParams();
  const { id } = params;
  const [qs] = useSearchParams();

  return (
    <div>
      <h1>
        Post {`Param: ${id}`} {`QS: ${qs}`}
      </h1>
      <Outlet />
    </div>
  );
};
