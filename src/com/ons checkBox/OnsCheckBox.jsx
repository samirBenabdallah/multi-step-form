import { useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleCheckBox } from "../../rtk/ons";
import { changePageNumber } from "../../rtk/appSetting";
const OnsCheckBox = ({
  isSelected,
  name,
  paragraphe,
  monthPrice,
  yearPrice,
  id,
}) => {
  const dispatch = useDispatch();
  const isMonth = useSelector((s) => s).appSetting.isMonth;
  const [isChecked, setCheckedValue] = useState(isSelected);
  dispatch(changePageNumber(3));
  return (
    <div className={`ons-checkbox ${isChecked && "active"}`}>
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={() => {
          dispatch(toggleCheckBox(id));
          setCheckedValue((curr) => !curr);
        }}
      />
      <label htmlFor={id}>
        <div>
          <p className="font-medium"> {name} </p>
          <p className="font-regular"> {paragraphe} </p>
        </div>
        <p className="font-regular">{`+&${
          isMonth ? monthPrice + "/mn" : yearPrice + "/yr"
        }`}</p>
      </label>
    </div>
  );
};

export default OnsCheckBox;
