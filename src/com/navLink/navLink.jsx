import "./style.css";
import "./media.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changePageNumber } from "../../rtk/appSetting";
const NavBarLink = ({ number, path, title }) => {
  const rtk = useSelector((s) => s);
  const dispatch = useDispatch();
  const appSetting = rtk.appSetting;
  return (
    <Link
      onClick={() => dispatch(changePageNumber(number))}
      to={path}
      className={`nav-link ${appSetting.pageNumber === number && "active"}`}
    >
      <div className="flex-center font-medium">
        <p>{number}</p>
      </div>
      <div>
        <p className="font-regular">step{number}</p>
        <p className="font-bold">{title}</p>
      </div>
    </Link>
  );
};

export default NavBarLink;
