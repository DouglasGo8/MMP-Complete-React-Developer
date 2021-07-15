import "./Shop.scss";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collectionsOverview/CollectionOverview";
import Collection from "../collection/Collection";

/**
 *
 * @param {*} param0
 * @returns
 */
const shop = ({ match }) => {
  return (
    <div className="shop">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default shop;
