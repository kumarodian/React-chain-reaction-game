const RadioButton = ({ id, name, value, defaultChecked, onChange }) => {
  return (
    <span>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        onChange={onChange}
        readOnly
      />
      <label htmlFor={id}>{value}</label>
    </span>
  );
};

export default RadioButton;
