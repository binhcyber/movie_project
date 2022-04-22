import { CALCULATE_FILM, INFOR_FILM } from "../type/InforFilmType";

const initialState = {
  inforFilm: {},
  calculateFilm: {},
};

export const InforFilmReducer = (state = initialState, action) => {
  switch (action.type) {
    case INFOR_FILM: {
      state.inforFilm = action.payload;
      return { ...state };
    }
    case CALCULATE_FILM: {
      state.calculateFilm = action.payload;
      return { ...state };
    }

    default:
      return state;
  }
};
