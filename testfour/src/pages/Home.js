import React, { useState } from "react";

function Home() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
        className="greeting-input"
      />

      {name && <h1>Hello, {name}, are you ready to practise your English?</h1>}
    </div>
  );
}

export default Home;
