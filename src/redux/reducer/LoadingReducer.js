import { SET_LOADING_END, SET_LOADING_START } from "../type/LoadingType";

const initialState = {
  isLoading: true,
  count: 0,
};

export const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_START: {
      state.count++;
      state.isLoading = true;
      return { ...state };
    }
    case SET_LOADING_END: {
      state.count--;
      if (state.count === 0) {
        state.isLoading = false;
      }
      return { ...state };
    }

    default:
      return state;
  }
};
