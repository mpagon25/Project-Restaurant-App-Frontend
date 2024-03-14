const FormInput = ({
  refName,
  inputType,
  inputName,
  inputText,
  inputClassName,
  labelClassName,
  placeHolder,
  inputValue,
  onChange,
  required,
  checked,
  minValue,
  maxValue,
}) => {
  const refFunc = (refrence) => {
    refrence.current.focus();
  };

  return (
    <>
      <label
        style={{ fontSize: "36px" }}
        className={labelClassName && labelClassName}
        onClick={() => {
          refFunc(refName);
        }}
      >
        {inputText}
      </label>
      <input
        style={{
          height: "50px",
          fontSize: "30px",
          textAlign: "left",
          alignItems: "flex-start",
          border: "none",
          backgroundColor: "#ffffff11",
          color: "white",
          borderBottomWidth: "1px",
          borderBottomColor: "white",
          borderBottomStyle: "solid",
          width: "100%",
        }}
        checked={checked}
        required={required}
        placeholder={placeHolder}
        ref={refName}
        className={inputClassName}
        type={inputType}
        name={inputName}
        value={inputValue}
        onChange={onChange}
        min={minValue}
        max={maxValue}
      />
    </>
  );
};
export default FormInput;
