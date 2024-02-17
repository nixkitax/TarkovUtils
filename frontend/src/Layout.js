import React from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import backgroundImage from "./Images/maps/wallpaper.jpg";

function Layout({ children }) {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />

      <main className="h-screen">
        <Container>{children}</Container>
      </main>
    </div>
  );
}

export default Layout;
