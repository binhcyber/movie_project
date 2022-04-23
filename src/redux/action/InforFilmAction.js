import { store } from "../../index.js";
import { QuanlyPhimServices } from "../../services/QuanlyPhimServices/QuanlyPhimServices";
import { QuanlyRapServices } from "../../services/QuanlyRapService/QuanlyRapService";
import { CALCULATE_FILM, INFOR_FILM } from "../type/InforFilmType";
import { set_Loading_End, set_Loading_Start } from "./LoadingAction";

export const setInforFilmAction = (maPhim) => {
  store.dispatch(set_Loading_Start());
  try {
    return async (dispatch) => {
      const result = await QuanlyPhimServices.LayThongTinPhim(maPhim);
      store.dispatch(set_Loading_End());
      dispatch({
        type: INFOR_FILM,
        payload: result.data.content,
      });
    };
  } catch (err) {
    store.dispatch(set_Loading_End());
    console.log(err);
  }
};
export const setcalculateFilmAction = (maPhim) => {
  store.dispatch(set_Loading_Start());
  try {
    return async (dispatch) => {
      const result = await QuanlyRapServices.LayThongTinLichChieuPhim(maPhim);
      store.dispatch(set_Loading_End());
      dispatch({
        type: CALCULATE_FILM,
        payload: result.data.content,
      });
    };
  } catch (err) {
    store.dispatch(set_Loading_End());
    console.log(err);
  }
};
