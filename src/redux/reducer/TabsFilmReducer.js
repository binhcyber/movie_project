import {
  SET_HE_THONG_RAP,
  SET_THONG_TIN_LICH_CHIEU,
} from "../type/TabsFilmType";
const initialState = {
  heThongRap: [],
  thongTinLichChieu: [],
};
export const TabsFilmReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HE_THONG_RAP: {
      state.heThongRap = action.payload;
      return { ...state };
    }
    case SET_THONG_TIN_LICH_CHIEU: {
      state.thongTinLichChieu = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
