import { useState } from "react";
import Header from "./components/header";
import CoreConcept from "./components/concept";
import Button from "./components/button";

import { CORE_CONCEPTS } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Please click a button");

  function handleSelect(text) {
    setSelectedTopic(text);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item, index) => (
              <CoreConcept key={index} {...item} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <Button onSelect={handleSelect}>Components</Button>
            <Button onSelect={handleSelect}>JSX</Button>
            <Button onSelect={handleSelect}>Props</Button>
            <Button onSelect={handleSelect}>State</Button>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
