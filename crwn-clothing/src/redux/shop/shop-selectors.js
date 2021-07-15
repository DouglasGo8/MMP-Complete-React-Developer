import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

/**
 *
 */
export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

/**
 *
 * @param {*} collectionUrlParam
 * @returns
 */
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
    //collections.find((c) => c.id === COLLECTION_ID_MAP[collectionUrlParam])
  )
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);
