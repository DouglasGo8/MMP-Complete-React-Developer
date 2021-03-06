import "./FormInput.scss";

/**
 *
 * @param {*} handleChange
 * @param {*} label
 * @param  {...any} otherProps
 * @returns
 */
const formInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default formInput;
