import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/userSelector";
import { checkUserSession } from "./redux/user/userActions";

import Header from "./componets/header/Header";
import Spinner from "./componets/spinner/Spinner";
import ErrorBoundary from "./componets/error-boundary/ErrorBoundary";

import { GlobalStyle } from "./GlobalStyles";

const HomePage = lazy(() => import("./pages/homepage/HomePage"));
const ShopPage = lazy(() => import("./pages/shop/Shop"));
const SignInAndSignUp = lazy(() =>
  import("./pages/sign-in-and-sign-up/SignInAndSignUp")
);
const Checkout = lazy(() => import("./pages/checkout/Checkout"));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route
              exact
              path="/signin"
              render={() => {
                return currentUser ? <Redirect to="/" /> : <SignInAndSignUp />;
              }}
            ></Route>
            <Route exact path="/checkout" component={Checkout} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, { checkUserSession })(App);
