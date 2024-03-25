import "./style.css";
import "./media.css";
import { Button, Header, InputForm } from "../../com";
import { useDispatch } from "react-redux";
import { changePersonalInfo } from "../../rtk/personalInfo";
const PersonalInfo = () => {
  const dispatch = useDispatch();
  function getInfo() {
    let result = {
      name: document.querySelector(".input-form #name").value,
      email: document.querySelector(".input-form #email").value,
      phone: document.querySelector(".input-form #phone").value,
    };
    dispatch(changePersonalInfo(result));
  }
  function click(e) {
    const InputForm = document.getElementsByClassName("input-form");
    const inputs = document.querySelectorAll(".personal-info input");
    let returnValue = true;
    inputs.forEach((ele, i) => {
      const value = ele.value;
      const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      if (value === "") {
        InputForm[i].classList.add("error");
        returnValue = false;
      } else if (ele.id == "email" && !emailRegExp.test(value)) {
        InputForm[i].classList.add("error");
        InputForm[i].classList.add("error-email");
        returnValue = false;
      } else {
        InputForm[i].classList.remove("error");
        InputForm[i].classList.remove("error-email");
      }
    });
    returnValue && getInfo();
    return returnValue;
  }
  return (
    <section className="personal-info">
      <Header
        paragraphe={
          "Please provide your name, email address, and phone number."
        }
        title={"Personal info"}
      />
      <InputForm
        id={"name"}
        label={"Name"}
        placeholder={"e.g. Stephen King"}
        type={"text"}
      />
      <InputForm
        id={"email"}
        label={"Email Address"}
        placeholder={"e.g. stephenking@lorem.com"}
        type={"email"}
      />
      <InputForm
        id={"phone"}
        label={"Phone Number"}
        placeholder={"e.g. +1 234 567 890"}
        type={"text"}
      />
      <Button pageNumber={2} path={"/plan"} text={"next step"} click={click} />
    </section>
  );
};

export default PersonalInfo;
