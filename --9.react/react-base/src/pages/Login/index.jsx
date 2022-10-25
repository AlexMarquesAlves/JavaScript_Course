import { useDispatch } from "react-redux";
import { Container } from "../../styles/global-styles";
import { Paragrafo, Title } from "./styles";

export const Login = () => {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch({
      type: "BOTAO_CLICADO",
    });
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
