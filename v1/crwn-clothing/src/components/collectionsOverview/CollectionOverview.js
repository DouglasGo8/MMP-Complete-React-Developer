import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop-selectors";

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
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(collectionOverview);
