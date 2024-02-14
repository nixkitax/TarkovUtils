import React from "react";
import Header from "./components/Header";
import Container from "./components/Container";

function Layout({ children }) {
  return (
    <div>
      <Header />

      <main>
        <Container>{children}</Container>
      </main>
    </div>
  );
}

export default Layout;
