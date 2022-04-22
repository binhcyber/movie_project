import { SET_BANNER_PHIM } from "../type/CarouselType";

const initialState = {
  dsBannerPhim: [],
};

export const CarouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BANNER_PHIM: {
      state.dsBannerPhim = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
