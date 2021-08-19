# Complete React Developer in 2021 w; Redux, Hooks and GraphQL

---

```shell

npm i --save-dev @babel/cli @babel/core @babel/plugin-proposal-class-properties \
  @babel/plugin-proposal-export-default-from @babel/plugin-transform-runtime \
  @babel/polyfill @babel/preset-env @babel/preset-react \
  babel-eslint babel-jest babel-loader babel-plugin-module-resolver \
  babel-plugin-transform-class-properties babel-plugin-transform-runtime \
  babel-polyfill

npm i --save-dev eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y \
    eslint-plugin-node eslint-plugin-promise \
    eslint-plugin-react

npm i --save-dev css-loader file-loader html-loader react-hot-loader sass-loader style-loader react-svg-loader url-loader

npm i --save-dev copy-webpack-plugin html-webpack-plugin mini-css-extract-plugin sass node-sass

npm i --save-dev webpack webpack-cli webpack-dev-server

npm i redux redux-logger react-redux redux-persist

npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier

npm i lodash.memoize

npm i react react-dom react-router-dom reselect

```

## Links

- [React Hooks in Action](https://github.com/jrlarsen/react-hooks-in-action)
- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Robot Hash](https://robohash.org)
- [A Complete Webpack Setup for React](https://medium.com/swlh/a-complete-webpack-setup-for-react-e56a2edf78ae)
- [Sass Loader](https://webpack.js.org/loaders/sass-loader/)
- [Dynamic React Router Fix](https://webpack.js.org/guides/public-path/)
- [SVG Loader](https://www.npmjs.com/package/react-svg-loader)
- [Atom ReactJS Packages](https://medium.com/productivity-freak/my-atom-editor-setup-for-js-react-9726cd69ad20)

## Redux Fundamentals Concepts

```javascript
// index.js
/**
 * Provider works like a Wrapper the Entire Application to use Redux
 * it allow us to get access to all the thins related to the store
 */
import { Provider } from "react-redux";
import store from "redux/store";
//
<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>;

// project structure
// |+ redux/root-reducer.js or index.js
// |+ redux/user/reducer.js (folder optional but good practice to organize state by subject) the state will be represented by last state or initial state
// action object is commonly represented by a bellow object
{
    type: 'RETRIEVE_VALID_USER',
    payload: 'new_or_initial_payload'
}

// +| redux/actions/user.js
// Similar to setState React.js core
export const setRetrieveValidUser = (user) => ({
    type: 'RETRIEVE_VALID_USER',
    payload: user,
})

// in a reducer.js file content
const INITIAL_STATE = {
    currentUser: null,
    // other stuffs
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'RETRIEVE_VALID_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;


// +| redux/root-reducer.js
import {combineReducers} from "redux";
import userReducer from "./userReducer";

export default combineReducers({
    user: userReducer, // function
})

// +| redux/store.js
import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import rootReducer from "root-reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

// +| FooComponent.js

import {connect} from "react-redux";

const FooComponent = ({myProperty}) => return <div>{myProperty.currentUser}</div>

// the name can be anything, but bellow is a commonly used
const mapStateToProps = (state) => ({
    myProperty: state.user.currentUser,
})

export default connect(mapStateToProps)(FooComponent);

// +| App.js (update The State) Hooks Mode
import {connect} from "react-redux";
import {setRetrieveValidUser} from "/redux/action/user";
const App = ({retrieveValidUser, setRetrieveValidUser}) => {
    useEffect = (() => {
        const {user} = await api({method: 'GET', url: 'api/valid/user?id=123'});
        props.setRetrieveValidUser(user);
    });
}
const mapDispatchToProps = {setRetrieveValidUser};

export default connect(null, mapDispatchToProps)(App);

// +| App.js as Stateful Mode
import {connect} from "react-redux";
import {setRetrieveValidUser} from "/redux/action/user";
class App extends Component {
    componentDidMount() {
        const {setRetrieveValidUser} = this.props;

        const {data} = axios({
            ...
        });
        setRetrieveValidUser(data);
    }
}
const mapStateToProps = ({user}) => ({
    user: user.currentUser
})
const mapDispatchToProps = dispatch => ({
    setRetrieveValidUser: user => dispatch(setRetrieveValidUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
```

## How create HOCs

```javascript
import UserProfile from "../components/UserProfile";


import "./App.scss";

export default function App() {
  // https://jsonplaceholder.typicode.com/posts?userId=2
  return (
    <div className="App">
      <UserProfile name="Yihua" email="yihua@mail.com" />
    </div>
  );
}

import withData from "../src/withData";

/**
 * @author:
 *
 */
const userProfile = ({ data, name, email }) => {
  return (
    <div className="container">
      <h1>{name}</h1>
      <h2>{email}</h2>
      Posts:
      {data.map((post) => (
        <div className="post" key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default withData(
  userProfile,
  "https://jsonplaceholder.typicode.com/posts?userId=2"
);


import { Component } from "react";

const withData = (wrappedComponent, dataSource) => {
  class WithData extends Component {
    state = {
      data: []
    };

    async componentDidMount() {
      fetch(dataSource)
        .then((resp) => resp.json())
        .then((data) => this.setState({ data: data.slice(0, 3) }));
    }

    render() {
      return <wrappedComponent data={this.state.data} {...this.props} />;
    }
  }

  return WithData;
};

export default withData;

```
