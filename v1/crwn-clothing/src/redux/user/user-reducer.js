//

import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

/**
 * Actions
 * @param {*} state
 * @param {*} action
 */
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      // When each Action fired
      // must return a new state
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
