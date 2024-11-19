import { useState } from "react";
import Button from "../button";
import Tab from "../tab";

import { EXAMPLES } from "../../data";

const topics = ["Components", "JSX", "Props", "State"];

function Examples() {
  const [content, setContent] = useState(undefined);

  function handleSelect(text) {
    setContent(EXAMPLES[text]);
  }

  return (
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
  );
}

export default Examples;
