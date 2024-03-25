import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { changeTO, toggleType } from "../../rtk/appSetting";
import { useState } from "react";
const Toggle = () => {
  const rtk = useSelector((s) => s);
  const [isMonth, setMonthValue] = useState(rtk.appSetting.isMonth);
  const dispatch = useDispatch();
  return (
    <div className="toggle-button flex-center">
      <p
        className={`font-medium ${isMonth && "active"}`}
        onClick={() => {
          setMonthValue(true);
          dispatch(changeTO(true));
        }}
      >
        Monthly
      </p>
      <div
        className={`toggle`}
        onClick={() => {
          setMonthValue((curr) => !curr);
          dispatch(toggleType());
        }}
      >
        <div className={`${isMonth || "yearly"}`}></div>
      </div>
      <p
        className={`font-medium ${isMonth || "active"}`}
        onClick={() => {
          setMonthValue(false);
          dispatch(changeTO(false));
        }}
      >
        Yearly
      </p>
    </div>
  );
};

export default Toggle;
