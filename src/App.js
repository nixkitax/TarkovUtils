import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Maps from "./components/Maps";
import Layout from "./Layout";
import Login from "./components/Login";
import Task from "./components/Task";

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/maps" element={<Maps />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/task" element={<Task />} />
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App;