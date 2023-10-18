import "./App.css";
import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

import { ChakraProvider, theme } from "@chakra-ui/react";

const App = () => {
  let element = useRoutes(routes);
  console.log(window.screen.width);

  return <ChakraProvider theme={theme}>{element}</ChakraProvider>;
};

export default App;
