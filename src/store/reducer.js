import * as actionTypes from "./actions";

const initialState = {
  users: 1,
  page: 1,
  countPerPage: 6,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USERS:
      return {
        ...state,
      };
    case actionTypes.SETGETPARAMS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
