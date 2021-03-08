import axios from "axios";
import { USERS, SETGETPARAMS } from "../types";
import reducer from "../reducers/userReducer";

export const getUser = () => {
  return (dispatch) => {
    axios
      .get(
        `https://reqres.in/api/users?page=${reducer.page}&per_page=${reducer.countPerPage}`
      )
      .then((res) => {
        reducer.setUsers(res.data);
      })
      .catch((err) => {
        reducer.setUsers({});
      });
  };
};

export function setGetParams(type) {
  var queryParams = new URLSearchParams(window.location.search);
  if (type === "get") {
    return queryParams.get("page");
  }
  queryParams.set("page", reducer.page);
  window.history.replaceState(null, null, "?" + queryParams.toString());
}
