import { USER_LOGIN, USER_SIGNUP } from "../../redux/type/LocalUserType";
import { ACCESS_TOKEN } from "../../redux/type/UserType";

export const LocalUser = {
  setLocalUser: (data) => {
    console.log(data);
    const json = JSON.stringify(data);
    localStorage.setItem(USER_LOGIN, json);
  },
  getLocalUser: () => {
    if (localStorage.getItem(USER_LOGIN)) {
      const json = localStorage.getItem(USER_LOGIN);
      return JSON.parse(json);
    } else {
      return null;
    }
  },
  removeLocalUser: () => {
    return localStorage.removeItem(USER_LOGIN);
  },
  removeAccessToken: () => {
    return localStorage.removeItem(ACCESS_TOKEN);
  },
  setLocalUserSignUp: (data) => {
    console.log(data);
    const json = JSON.stringify(data);
    localStorage.setItem(USER_SIGNUP, json);
  },
  getLocalUserSignUp: () => {
    if (localStorage.getItem(USER_SIGNUP)) {
      const json = localStorage.getItem(USER_SIGNUP);
      return JSON.parse(json);
    } else {
      return null;
    }
  },
  removeLocalUserSignUp: () => {
    return localStorage.removeItem(USER_SIGNUP);
  },
};
