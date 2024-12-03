import React from "react";

function Navigation({ setPage }) {
  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => setPage("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => setPage("reading")}>Reading</button>
        </li>
        <li>
          <button onClick={() => setPage("watching")}>Watching</button>
        </li>
        <li>
          <button onClick={() => setPage("listening")}>Listening</button>
        </li>
        <li>
          <button onClick={() => setPage("writing")}>Writing</button>
        </li>
        <li>
          <button onClick={() => setPage("speaking")}>Speaking</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
