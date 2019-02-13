import React from "react";

// Layout Helper
import Section from "./Section";

// Hooks :)
import Counter from "../Hooks/Counter";
import DocTitle from "../Hooks/DocTitle";
import Inputs from "../Hooks/Inputs";
import SavedInputs from "../Hooks/SavedInputs";
import Resize from "../Hooks/Resize";

import Responsive from "../Hooks/Responsive";

function App() {
  return (
    <div className="App">
      <Section title="React Hooks" />
      <Section subtitle="Basic">
        <Counter />
        <DocTitle />
        <Inputs />
        <SavedInputs />
        <Resize />
      </Section>
      <Section subtitle="Advanced">
        <Responsive />
      </Section>
    </div>
  );
}

export default App;
