import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import "./media.css";
import { addPlanInfo } from "../../rtk/cardInfo";
const PlanCard = ({ img, title, monthPrice, yearPrice, cardNumber }) => {
  const rtk = useSelector((s) => s);
  const dispatch = useDispatch();
  const isMonth = rtk.appSetting.isMonth;
  const rtkCardNumber = rtk.planCard.cardNumber;
  return (
    <div
      onClick={() => {
        const payload = {
          img,
          name: title,
          monthPrice,
          yearPrice,
          cardNumber,
        };
        dispatch(addPlanInfo(payload));
      }}
      className={`plan-card  ${cardNumber === rtkCardNumber && "active"}`}
    >
      <img src={img} alt="" />
      <p className="font-bold"> {title} </p>
      <p className="font-regular">
        {`$${isMonth ? monthPrice + "/mn" : yearPrice + "/yr"}`}{" "}
      </p>
      {isMonth && <p className="font-regular">2 monts free</p>}
    </div>
  );
};

export default PlanCard;
