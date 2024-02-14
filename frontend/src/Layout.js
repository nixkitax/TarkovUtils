import React from "react";
import Header from "./components/Header";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>
        <div className="ml-96 mr-60">{children}</div>
      </main>
    </div>
  );
}

export default Layout;
