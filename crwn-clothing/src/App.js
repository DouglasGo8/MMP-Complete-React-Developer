import { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header";

import ShopPage from "./pages/shop/Shop";
import HomePage from "./pages/home/HomePage";
import SignInAndUp from "./pages/sign/SignInAndUp";

/**
 *
 * @returns
 */
class App extends Component {
  state = {
    currentUser: null,
  };

  componentDidMount() {
    const user = [
      {
        id: "os1XlNx3ib14xxsBG",
        name: "UserA",
        email: "user@mail.com",
        cartItems: [
          {
            id: "Lilyo2CHVLK3PSIDx4",
            name: "Blue Hat",
          },
          {
            id: "QYDFI4E918jDGLP13RqG",
            name: "Leather Jacket",
          },
        ],
      },
    ];
    this.setState({ currentUser: user });
  }

  render() {
    return (
      <Fragment>
        <Header
          currentUser={this.state.currentUser}
          handlerSignIn={this.signInHandler}
          handlerSignOut={this.signOutHandler}
        />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndUp} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
