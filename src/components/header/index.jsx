import image from "../../assets/react-core-concepts.png";

const desciptions = ["Fundamental", "Crucial", "Core"];

function randomAdverb(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const desciption = desciptions[randomAdverb(2)];
  return (
    <header>
      <img src={image} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {`${desciption} React concepts you will need for almost any app you are
        going to build!`}
      </p>
    </header>
  );
}

export default Header;
