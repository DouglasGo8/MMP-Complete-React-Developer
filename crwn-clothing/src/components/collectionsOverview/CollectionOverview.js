import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop-selectors";

import Preview from "../preview/Preview";

import "./CollectionOverview.scss";
/**
 *
 * @returns
 */
const collectionOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollections }) => {
        return <Preview key={id} {...otherCollections} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(collectionOverview);
