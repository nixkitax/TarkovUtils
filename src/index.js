import React from "react";
import { createRoot } from "react-dom/client"; // Importa createRoot da react-dom/client
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Utilizza createRoot invece di ReactDOM.render

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
