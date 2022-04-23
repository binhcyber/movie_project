import { SET_LOADING_START, SET_LOADING_END } from "../type/LoadingType";
export const set_Loading_Start = () => {
  return {
    type: SET_LOADING_START,
  };
};
export const set_Loading_End = () => {
  return {
    type: SET_LOADING_END,
  };
};
