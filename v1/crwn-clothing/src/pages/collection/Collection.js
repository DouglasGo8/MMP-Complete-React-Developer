import "./Collection.scss";
import { connect } from "react-redux";

import Item from "../../components/item/Item";

import { selectCollection } from "../../redux/shop/shop-selectors";

/**
 *
 * @param {*} param0
 * @returns
 */
const collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

/**
 *
 * @param {*} state
 * @param {*} owsProps
 */
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(collection);
