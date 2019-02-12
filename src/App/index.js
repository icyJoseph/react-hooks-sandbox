import React, { Component } from "react";

// Hooks :)
import Counter from "../Hooks/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>
            <code>React Hooks</code>
          </h1>
        </header>
        <div className="container with-flex-wrap">
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;
