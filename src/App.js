import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Maps from "./components/Maps";
import Layout from "./Layout";
import Login from "./components/Login";
import Task from "./components/Task";
import MapDescription from "./components/MapDescription";
import { Helmet } from "react-helmet";
import Item from "./components/Item";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tarkools </title>
        <link
          rel="icon"
          type="image/x-icon"
          href="../public/Images/favicon.ico"
        />
      </Helmet>
      <Layout>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/maps" element={<Maps />} />
            <Route path="/map/:id" element={<MapDescription />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/task" element={<Task />} />
            <Route exact path="/item" element={<Item />} />
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App; // Esporta App come esportazione predefinita
