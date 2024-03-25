import "./style.css";
import { tnankyouImg } from "../../public/assets/images/index";
import { useDispatch } from "react-redux";
import { changePageNumber } from "../../rtk/appSetting";
const Thanks = () => {
  const dispatch = useDispatch();
  dispatch(changePageNumber(4));
  return (
    <section className="thanks flex-center">
      <img src={tnankyouImg} alt="thanks img" />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </section>
  );
};

export default Thanks;
