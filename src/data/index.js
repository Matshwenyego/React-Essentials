import components from "../assets/components.png";
import jsx from "../assets/jsx-ui.png";
import props from "../assets/config.png";
import state from "../assets/state-mgmt.png";

export const CORE_CONCEPTS = [
  {
    image: components,
    title: "Components",
    description:
      "The core UI building block - compose the user interface by combining multiple components.",
  },
  {
    image: jsx,
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
  },
  {
    image: props,
    title: "Props",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them.",
  },
  {
    image: state,
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
  },
];
