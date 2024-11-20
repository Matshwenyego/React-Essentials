import "./index.css";
import PropTypes from "prop-types";

function Section({header, children, ...props}) {
  return (
    <section {...props}>
      <h2>{header}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
    header: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired || PropTypes.string.isRequired,
  };

export default Section;
