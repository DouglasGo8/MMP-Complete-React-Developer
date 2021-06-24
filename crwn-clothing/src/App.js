import { Component, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.scss";

import Header from "./components/header/Header";

import ShopPage from "./pages/shop/Shop";
import HomePage from "./pages/home/HomePage";

import { setCurrentUser } from "./redux/user/user-actions";
import SignIn from "./components/signin/SignIn";

/**
 *
 * @returns
 */
class App extends Component {
  componentDidMount() {
    const { setCurrentUser } = this.props;
    const userAuth = [
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
    //this.setState({ currentUser: userAuth });

    //console.log(this.props);

    setCurrentUser(userAuth);
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignIn />
            }
          />
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
