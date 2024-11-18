import PropTypes from "prop-types";

function Button({ children, onSelect }) {
  return (
    <li>
      <button onClick={() => onSelect(children)}>{children}</button>
    </li>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Button;
