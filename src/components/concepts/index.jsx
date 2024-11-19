import "./index.css";
import Concept from "../concept";
import { CORE_CONCEPTS } from "../../data";

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((item, index) => (
          <Concept key={index} {...item} />
        ))}
      </ul>
    </section>
  );
}

export default CoreConcepts;
