import P from "prop-types";
import * as Styled from "./styles";

export const Home = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

Home.propTypes = {
  children: P.node.isRequired,
};
