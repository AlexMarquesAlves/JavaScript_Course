import React from "react";
import { Header } from "./components/Header";
import { BrowserRouter, Router } from "react-router-dom";
import { Routes } from "./routes";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <global-styles />
    </BrowserRouter>
  );
};
