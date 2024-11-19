import "./index.css";
import PropTypes from "prop-types";

function Tab({ title, description, code }) {
  return (
    <div id="tab-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

Tab.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  };

export default Tab;
