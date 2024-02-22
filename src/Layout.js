import React from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import backgroundImage from "./Images/maps/wallpaper.jpg";
import Blur from "react-blur";

function Layout({ children }) {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className="h-full"
    >
      <Header />

      <main className="h-full">
        <Container>{children}</Container>
      </main>
    </div>
  );
}

export default Layout;
