import React from "react";

// Layout Helper
import Section from "./Section";

// Hooks :)
import Counter from "../Hooks/Counter";
import DocTitle from "../Hooks/DocTitle";
import Inputs from "../Hooks/Inputs";
import SavedInputs from "../Hooks/SavedInputs";
import Resize from "../Hooks/Resize";

import WindowWidth from "../Hooks/WindowWidth";
import ResizeOptimized from "../Hooks/ResizeOptimized";

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
        <WindowWidth />
        <ResizeOptimized />
      </Section>
    </div>
  );
}

export default App;
