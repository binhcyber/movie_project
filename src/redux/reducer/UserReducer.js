import { LocalUser } from "../../services/LocalUser/LocalUser";
import { ACCESS_TOKEN, DANG_KY, DANG_NHAP, DANG_XUAT } from "../type/UserType";

const initialState = {
  userLogin: LocalUser.getLocalUser(),
  userSignUp: LocalUser.getLocalUserSignUp(),
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case DANG_NHAP: {
      LocalUser.setLocalUser(action.payload);
      state.userLogin = action.payload;
      localStorage.setItem(ACCESS_TOKEN, action.payload.accessToken);
      return { ...state };
    }
    case DANG_XUAT: {
      LocalUser.removeLocalUser();
      LocalUser.removeAccessToken();
      state.userLogin = null;
      return { ...state };
    }
    case DANG_KY: {
      LocalUser.setLocalUserSignUp(action.payload);
      state.userSignUp = action.payload;
    }
    default:
      return { ...state };
  }
};
