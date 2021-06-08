import "./Button.scss";

/**
 *
 * @param {*} param0
 * @returns
 */
const button = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default button;
