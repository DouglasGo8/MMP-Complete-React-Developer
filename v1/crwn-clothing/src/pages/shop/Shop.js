import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collectionsOverview/CollectionOverview";
import Collection from "../collection/Collection";

import "./Shop.scss";
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
