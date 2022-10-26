import * as types from "../types";

export const clicaBotaoRequest = () => {
  return {
    type: types.BOTAO_CLICADO_REQUEST,
  };
};

export const clicaBotaoSuccess = () => {
  return {
    type: types.BOTAO_CLICADO_SUCCESS,
  };
};

export const clicaBotaoFailure = () => {
  return {
    type: types.BOTAO_CLICADO_FAILURE,
  };
};
