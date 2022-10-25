import React from "react";
import { Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Header } from "./components/Header";
import { Routes } from "./routes";
import { history } from "./services/history";

export const App = () => {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <global-styles />
      <ToastContainer autoClose={3000} className={"toast-container"} />
    </Router>
  );
};
