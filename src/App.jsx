import { useState } from "react";
import Header from "./components/header";
import CoreConcept from "./components/concept";
import Button from "./components/button";
import Tab from "./components/tab";

import { CORE_CONCEPTS, EXAMPLES } from "./data";

const topics = ["Components", "JSX", "Props", "State"];

function App() {
  const [content, setContent] = useState(undefined);

  function handleSelect(text) {
    setContent(EXAMPLES[text]);
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
            {topics.map((item, index) => (
              <Button
                active={content && content.title === item}
                key={index}
                onSelect={handleSelect}
              >
                {item}
              </Button>
            ))}
          </menu>
          {!content ? <p>Please select a topic.</p> : <Tab {...content} />}
        </section>
      </main>
    </div>
  );
}

export default App;
