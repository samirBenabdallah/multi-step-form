import "./style.css";
const InputForm = ({ label, id, placeholder, type }) => {
  return (
    <div className="input-form">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <input
        type={type}
        className="font-bold"
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
};

export default InputForm;
