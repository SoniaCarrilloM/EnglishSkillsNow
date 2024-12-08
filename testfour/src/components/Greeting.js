import React, { useState } from "react";

function Greeting() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
      />
      <h1>Hello, {name}!</h1>
    </div>
  );
}

export default Greeting;
