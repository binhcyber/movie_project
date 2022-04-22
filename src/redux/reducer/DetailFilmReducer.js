import { SET_DETAIL_FILM } from "../type/DetailFilmType";

const initialState = {
  listFilmDetail: [],
};

export const DetailFilmReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DETAIL_FILM: {
      state.listFilmDetail = action.payload;
      return { ...state };
    }

    default:
      return state;
  }
};
