import React, { Component } from "react";

// Hooks :)
import Counter from "../Hooks/Counter";
import DocTitle from "../Hooks/DocTitle";
import Inputs from "../Hooks/Inputs";
import SavedInputs from "../Hooks/SavedInputs";
import Resize from "../Hooks/Resize";

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
          <DocTitle />
          <Inputs />
          <SavedInputs />
          <Resize />
        </div>
      </div>
    );
  }
}

export default App;
