import React, { useState } from "react";
import Home from "./pages/Home";
import Reading from "./pages/Reading";
import Watching from "./pages/Watching";
import Listening from "./pages/Listening";
import Writing from "./pages/Writing";
import Speaking from "./pages/Speaking";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "reading":
        return <Reading />;
      case "watching":
        return <Watching />;
      case "listening":
        return <Listening />;
      case "writing":
        return <Writing />;
      case "speaking":
        return <Speaking />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navigation setPage={setPage} />
      {renderPage()}
    </div>
  );
}

export default App;
