import "./index.css";
import PropTypes from "prop-types";

function Button({ children, onSelect, active }) {
  return (
    <li>
      <button className={active ? "active" : undefined} onClick={() => onSelect(children)}>
        {children}
      </button>
    </li>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

export default Button;
