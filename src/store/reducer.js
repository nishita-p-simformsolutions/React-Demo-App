import { USERS, SETGETPARAMS } from "./types";

const initialState = {
  users: 1,
  page: 1,
  countPerPage: 6,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS:
      return {
        ...state,
        users: state.users,
      };
    case SETGETPARAMS:
      return {
        page: SETGETPARAMS("get") || 1,
      };
    default:
      return state;
  }
};

export default reducer;
