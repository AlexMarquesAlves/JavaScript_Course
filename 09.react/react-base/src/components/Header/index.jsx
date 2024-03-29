import React from "react";
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Nav } from "./styles";

export const Header = () => {
  const botaoClicado = useSelector((state) => state.example.botaoClicado);

  return (
    <Nav>
      <Link to={"/"}>
        <FaHome size={24} />
      </Link>
      <Link to={"/login"}>
        <FaUserAlt size={24} />
      </Link>
      <Link to={"/asdasd"}>
        <FaSignInAlt size={24} />
      </Link>
      <div>{botaoClicado ? <h2>Clicado</h2> : <h2>Não Clicado</h2>}</div>
    </Nav>
  );
};
