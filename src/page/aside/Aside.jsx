import "./style.css";
import "./media.css";
import { NavBarLink } from "../../com/index";
const Aside = () => {
  return (
    <aside>
      <NavBarLink number={1} path={"/"} title={"your info"} />
      <NavBarLink number={2} path={"/plan"} title={"select plan"} />
      <NavBarLink number={3} path={"/add-ons"} title={"add-ons"} />
      <NavBarLink number={4} path={"/summary"} title={"summary"} />
    </aside>
  );
};

export default Aside;
