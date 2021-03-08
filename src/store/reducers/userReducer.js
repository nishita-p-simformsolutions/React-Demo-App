import { USERS, SETGETPARAMS } from "../types";

const initialState = {
  users: [],
  page: 1,
  countPerPage: 6,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS:
      return {
        ...state,
        users: action.payload,
      };
    case SETGETPARAMS:
      return {
        page: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
