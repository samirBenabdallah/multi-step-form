import { useDispatch } from "react-redux";
import "./style.css";
import { Link } from "react-router-dom";
import { changePageNumber } from "../../rtk/appSetting";

const Button = ({ text, path, pageNumber, click }) => {
  const dispatch = useDispatch();
  let className;
  if (text === "next step" || text === "confirm") className = "next";
  else className = "back";
  return (
    <Link
      to={path}
      onClick={(e) => {
        const result = click(e);
        if (result) dispatch(changePageNumber(pageNumber));
        else e.preventDefault();
      }}
      className={`btn font-regular ${className}`}
    >
      {text}
    </Link>
  );
};

export default Button;
