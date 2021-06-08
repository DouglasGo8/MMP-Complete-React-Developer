import "./Preview.scss";

import Item from "../item/Item";
/**
 *
 * @returns
 */
const previewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItem }) => {
          return <Item key={id} {...otherItem} />;
        })}
    </div>
  </div>
);

export default previewCollection;
