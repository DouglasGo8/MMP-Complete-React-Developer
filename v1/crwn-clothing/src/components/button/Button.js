import "./Button.scss";

/**
 *
 * @param {*} children
 * @param {*} isGoogleSignIn
 * @param {*} otherProps
 * @returns
 */
const button = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default button;
