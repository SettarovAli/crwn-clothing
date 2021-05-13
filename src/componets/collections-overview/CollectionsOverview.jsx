import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shopSelectors";

import CollectionPreview from "../collection-preview/CollectionPreview";

import "./CollectionsOverview.scss";

const CollectionsOverview = ({ collections }) => {
  const iterateObject = (collections) => {
    const arr = [];
    for (const [, value] of Object.entries(collections)) {
      arr.push(value);
    }
    console.log(arr);
    return arr;
  };

  return (
    <div className="collections-overview">
      {iterateObject(collections).map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
