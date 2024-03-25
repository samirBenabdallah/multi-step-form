import React from "react";

const Com = ({ ele }) => {
  let isMonth = true;
  return (
    <div className="ons-cards">
      <p className="font-regular"> {ele.name} </p>
      <p className="font-regular">
        {`+$${isMonth ? ele.monthPrice + "/mn" : ele.yearPrice + "/yr"}`}
      </p>
    </div>
  );
};

export default Com;
