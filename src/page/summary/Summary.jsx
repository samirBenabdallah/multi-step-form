import "./style.css";
import { Button, Header } from "../../com/index";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changePageNumber } from "../../rtk/appSetting";
const Summary = () => {
  // * initial code
  const dispatch = useDispatch();
  dispatch(changePageNumber(4));
  //* get rtk informations
  const rtk = useSelector((s) => s);
  const personalInfo = rtk.personalInfo;
  const card = rtk.planCard;
  const isMonth = rtk.appSetting.isMonth;
  const onsCard = Array.from(rtk.ons);
  //* get total price
  let total = isMonth ? card.monthPrice : card.yearPrice;
  onsCard.map((ele) => {
    if (ele.isSelected) {
      if (isMonth) total += ele.monthPrice;
      else total += ele.yearPrice;
    }
  });
  //function check
  function check() {
    let returnValue = true;
    const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (
      personalInfo.name === "" ||
      personalInfo.phoen === "" ||
      personalInfo.email === ""
    ) {
      returnValue = false;
    } else if (!emailRegExp.test(personalInfo.email)) {
      returnValue = false;
    }
    let onsResult = false;
    onsCard.map((ele) => {
      if (ele.isSelected) onsResult = true;
    });
    return onsResult && returnValue;
  }
  return (
    <section className="summary">
      <Header
        paragraphe={"Double-check everything looks OK before confirming."}
        title={"Finishing up"}
      />
      <div className="summary-result">
        {/* plan card */}
        <section>
          <div>
            <p className="font-bold">{`${card.name} (${
              isMonth ? "monthly" : "yearly"
            })`}</p>
            <Link to={"/plan"} className="font-regular">
              Change
            </Link>
          </div>
          <p className="font-bold">
            {`$${isMonth ? card.monthPrice + "/mn" : card.yearPrice + "/yr"}`}
          </p>
        </section>
        <div className="line"></div>
        {/* ons cards */}
        {onsCard[0].isSelected && (
          <div className="ons-cards">
            <p className="font-regular"> {onsCard[0].name} </p>
            <p className="font-regular">
              {`+$${
                isMonth
                  ? onsCard[0].monthPrice + "/mn"
                  : onsCard[0].yearPrice + "/yr"
              }`}
            </p>
          </div>
        )}
        {onsCard[1].isSelected && (
          <div className="ons-cards">
            <p className="font-regular"> {onsCard[1].name} </p>
            <p className="font-regular">
              {`+$${
                isMonth
                  ? onsCard[1].monthPrice + "/mn"
                  : onsCard[1].yearPrice + "/yr"
              }`}
            </p>
          </div>
        )}
        {onsCard[2].isSelected && (
          <div className="ons-cards">
            <p className="font-regular"> {onsCard[2].name} </p>
            <p className="font-regular">
              {`+$${
                isMonth
                  ? onsCard[2].monthPrice + "/mn"
                  : onsCard[2].yearPrice + "/yr"
              }`}
            </p>
          </div>
        )}
      </div>
      {/* total card */}
      <div className="total">
        <p className="font-regular">Total per{isMonth ? "month" : "year"}</p>
        <p className="font-bold"> {`+$${total}/${isMonth ? "mo" : "yr"}`} </p>
      </div>
      {/* button */}
      <Button click={check} pageNumber={5} path={"/thanks"} text={"confirm"} />
      <Button
        click={() => true}
        pageNumber={5}
        path={"/add-ons"}
        text={"back"}
      />
    </section>
  );
};

export default Summary;
