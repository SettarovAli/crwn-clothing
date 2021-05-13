import React from "react";
import { Route } from "react-router-dom";

import Collection from "../collection/Collection";
import CollectionsOverview from "../../componets/collections-overview/CollectionsOverview";

import "./Shop.scss";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default ShopPage;
