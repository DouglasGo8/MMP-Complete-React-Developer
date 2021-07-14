import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./Directory.scss";

import MenuItem from "../menuItem/MenuItem";
import { selectDirectorySections } from "../../redux/directory/directory-selectors";
/**
 *
 * @returns
 */
const directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...sectionProps }) => {
        return <MenuItem key={id} {...sectionProps} />;
      })}
    </div>
  );
};

/**
 *
 * @param {*} state
 */
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(directory);
