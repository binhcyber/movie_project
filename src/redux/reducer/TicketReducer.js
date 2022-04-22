import { GET_LIST_SEAT, SET_SEAT } from "../type/TicketType";

const initialState = {
  dsGhe: [],
  dsGheDangDat: [],
};

export const TicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_SEAT: {
      state.dsGhe = action.payload;
      return { ...state };
    }
    case SET_SEAT: {
      console.log(action.payload);
      let dsGheCapNhat = [...state.dsGheDangDat];
      let index = dsGheCapNhat.findIndex(
        (gheDD) => gheDD.maGhe === action.payload.maGhe
      );
      console.log(index);
      if (index !== -1) {
        dsGheCapNhat.splice(index, 1);
      } else {
        dsGheCapNhat.push(action.payload);
      }
      return { ...state, dsGheDangDat: dsGheCapNhat };
    }

    default:
      return state;
  }
};
