import "./style.css";
import { Button, Header, OnsCheckBox } from "../../com/index";
import { useSelector } from "react-redux";
const Ons = () => {
  const rtk = useSelector((s) => s);
  let checkboxs = rtk.ons;

  function click() {
    let result = false;
    checkboxs.map((ele) => {
      if (ele.isSelected) result = true;
    });
    return result;
  }
  return (
    <section>
      <Header
        paragraphe={"Add-ons help enhance your gaming experience."}
        title={"Pick add-ons"}
      />
      {checkboxs.map((ele, index) => (
        <OnsCheckBox
          id={ele.id}
          isSelected={ele.isSelected}
          monthPrice={ele.monthPrice}
          name={ele.name}
          paragraphe={ele.paragraphe}
          yearPrice={ele.yearPrice}
          key={index}
        />
      ))}
      <Button
        click={click}
        pageNumber={4}
        path={"/summary"}
        text={"next step"}
      />
      <Button
        click={() => true}
        pageNumber={2}
        path={"/plan"}
        text={"go back"}
      />
    </section>
  );
};

export default Ons;
