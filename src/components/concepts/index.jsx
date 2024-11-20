import "./index.css";
import Concept from "../concept";
import Section from '../section';
import { CORE_CONCEPTS } from "../../data";

function CoreConcepts() {
  return (
    <Section header="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((item, index) => (
          <Concept key={index} {...item} />
        ))}
      </ul>
    </Section>
  );
}

export default CoreConcepts;
