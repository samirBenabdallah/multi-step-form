import "./style.css";
const Header = ({ title, paragraphe }) => {
  return (
    <header>
      <h1 className="font-bold"> {title} </h1>
      <p className="font-normal"> {paragraphe} </p>
    </header>
  );
};

export default Header;
