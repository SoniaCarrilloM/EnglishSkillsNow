import React, { useState } from "react";

function Reading() {
  const [response, setResponse] = useState("");

  const Question = (answer) => {
    setResponse(answer);
  };

  return (
    <div className="reading-container">
      <div className="reading-survey">
        <p>Do you like reading?</p>
        <button onClick={() => Question("yes")}>Yes</button>
        <button onClick={() => Question("no")}>No</button>
        {response === "yes" && <p>Good to know! I hope you enjoy this page.</p>}
        {response === "no" && (
          <p>
            Sorry to hear. Make sure you choose a text about something you like.
          </p>
        )}
      </div>
      <h1>Welcome to the Reading Page</h1>
      <p>Choose a text to practise your Reading Skills.</p>
      <ul className="reading-texts">
        <li>
          <a
            href="https://www.thefinertimes.com/sports-in-the-middle-ages"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sports in the Middle Ages
          </a>
        </li>
        <li>
          <a
            href="https://kids.britannica.com/kids/article/Technology-and-Invention/353296"
            target="_blank"
            rel="noopener noreferrer"
          >
            New Technology
          </a>
        </li>
        <li>
          <a
            href="https://www.k9ofmine.com/dog-training-for-kids/"
            target="_blank"
            rel="noopener noreferrer"
          >
            How to Train Your Dog
          </a>
        </li>
      </ul>
      <div className="reading-questions">
        <p>Answer the questions</p>
        <p>
          Summarize the text. Use your own words. Use 100 words.
          <br />
          What did you learn about the text? Use 100 words.
          <br />
          Would you recommend this text?
          <br />
          Which other title would you give this text? Explain why. Use 50 words.
        </p>
      </div>
    </div>
  );
}

export default Reading;
