import { useDispatch } from "react-redux";
import { clicaBotao } from "../../store/modules/example/actions";
import { Container } from "../../styles/global-styles";
import { Paragrafo, Title } from "./styles";

export const Login = () => {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(clicaBotao());
  }

  return (
    <Container>
      <Title>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
};
