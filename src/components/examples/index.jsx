import { useState } from "react";
import Button from "../button";
import Tab from "../tab";
import Section from '../section';

import { EXAMPLES } from "../../data";

const topics = ["Components", "JSX", "Props", "State"];

function Examples() {
  const [content, setContent] = useState(undefined);

  function handleSelect(text) {
    setContent(EXAMPLES[text]);
  }

  return (
    <Section header="Examples" id="examples">
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
    </Section>
  );
}

export default Examples;
