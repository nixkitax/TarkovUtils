import React from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import backgroundImage from "./Images/maps/wallpaper.jpg";
import Footer from "./components/Footer";

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

      <main
        className="h-full"
        style={{
          background:
            "linear-gradient(to top right, rgba(125,125,125,.01), rgba(6,13,12,.95))",
          overflowY: "auto",
        }}
      >
        <Container>{children}</Container>
      </main>
    </div>
  );
}

export default Layout;
