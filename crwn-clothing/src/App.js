import React from 'react';

import { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.scss';

import Header from './components/header/Header';

import ShopPage from './pages/shop/Shop';
import HomePage from './pages/home/HomePage';
import CheckOutPage from './pages/checkout/Checkout';

import { setCurrentUser } from './redux/user/user-actions';
import SignIn from './components/signin/SignIn';
import { selectCurrentUser } from './redux/user/user.selector';

/**
 *
 * @returns
 */
class App extends Component {
  componentDidMount() {
    const { setCurrentUser } = this.props;
    
    const userAuth = [
      {
        id: 'os1XlNx3ib14xxsBG',
        name: 'UserA',
        email: 'user@mail.com',
        cartItems: [
          {
            id: 'Lilyo2CHVLK3PSIDx4',
            name: 'Blue Hat',
          },
          {
            id: 'QYDFI4E918jDGLP13RqG',
            name: 'Leather Jacket',
          },
        ],
      },
    ];

    // this.setState({ currentUser: userAuth });
    // console.log(this.props);

    setCurrentUser(userAuth);
  }

  render() {
    const currentUser = this.props;
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              (currentUser ? <Redirect to="/" /> : <SignIn />)}
          />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
