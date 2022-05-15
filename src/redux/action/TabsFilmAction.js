import { store } from "../../index.js";
import { QuanlyRapServices } from "../../services/QuanlyRapService/QuanlyRapService";
import {
  SET_HE_THONG_RAP,
  SET_THONG_TIN_LICH_CHIEU,
} from "../type/TabsFilmType";
import { set_Loading_End, set_Loading_Start } from "./LoadingAction";

export const setHeThongRapAction = () => {
  store.dispatch(set_Loading_Start());
  try {
    return async (dispatch) => {
      const result = await QuanlyRapServices.LayThongTinHeThongRap();
      store.dispatch(set_Loading_End());
      dispatch({
        type: SET_HE_THONG_RAP,
        payload: result.data.content,
      });
    };
  } catch (err) {
    store.dispatch(set_Loading_End());
    console.log(err);
  }
};
export const setThongTinLichChieuAction = () => {
  store.dispatch(set_Loading_Start());
  try {
    return async (dispatch) => {
      const result = await QuanlyRapServices.LayThongTinLichChieuHeThongRap();
      store.dispatch(set_Loading_End());
      dispatch({
        type: SET_THONG_TIN_LICH_CHIEU,
        payload: result.data.content,
      });
    };
  } catch (err) {
    store.dispatch(set_Loading_End());
    console.log(err);
  }
};
