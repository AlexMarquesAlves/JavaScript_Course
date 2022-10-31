import { get } from "lodash";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { isEmail } from "validator";
import * as actions from "../../store/modules/auth/actions";
import { Container } from "../../styles/global-styles";
import { Form } from "./styles";

export const Login = (props) => {
  const dispatch = useDispatch();
  const prevPath = get(props, "location.state.prevPath", "/");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error("E-mail inválido.");
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error("Senha inválida");
    }

    if (formErrors) return;

    dispatch(actions.loginRequest({ email, password, prevPath }));
  };

  return (
    <Container>
      <h1>Login</h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu e-mail"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Sua senha"
        />
        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
};
