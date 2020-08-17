import React from "react";

function Food({ e }) {
  return <h3>I like {e}</h3>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food e="k" />
      <Food e="z" />
    </div>
  );
}

export default App;
