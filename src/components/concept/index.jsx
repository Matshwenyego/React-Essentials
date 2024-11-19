import "./index.css";
import PropTypes from "prop-types";

function Concept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

Concept.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Concept;
