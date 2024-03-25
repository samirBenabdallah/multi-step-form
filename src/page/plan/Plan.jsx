import "./style.css";
import "./media.css";
import { Button, Header, PlanCard, Toggle } from "../../com/index";
import {
  advancedImg,
  arcadeImg,
  prodImg,
} from "../../public/assets/images/index";
import { useDispatch } from "react-redux";
import { changePageNumber } from "../../rtk/appSetting";
const Plan = () => {
  const dispatch = useDispatch();
  dispatch(changePageNumber(2));
  return (
    <section className="plan">
      <Header
        paragraphe={"You have the option of monthly or yearly billing."}
        title={"Select your plan"}
      />
      <div className="container">
        <PlanCard
          img={arcadeImg}
          monthPrice={9}
          yearPrice={90}
          title={"arcade"}
          cardNumber={1}
        />
        <PlanCard
          cardNumber={2}
          img={advancedImg}
          monthPrice={12}
          yearPrice={120}
          title={"advanced"}
        />
        <PlanCard
          cardNumber={3}
          img={prodImg}
          monthPrice={15}
          yearPrice={150}
          title={"pro"}
        />
      </div>
      <Toggle />
      <Button
        click={() => true}
        pageNumber={3}
        path={"/add-ons"}
        text={"next step"}
      />
      <Button click={() => true} pageNumber={1} path={"/"} text={"go back"} />
    </section>
  );
};

export default Plan;
