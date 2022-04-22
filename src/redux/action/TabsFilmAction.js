import { QuanlyRapServices } from "../../services/QuanlyRapService/QuanlyRapService";
import {
  SET_HE_THONG_RAP,
  SET_THONG_TIN_LICH_CHIEU,
} from "../type/TabsFilmType";

export const setHeThongRapAction = () => {
  try {
    return async (dispatch) => {
      const result = await QuanlyRapServices.LayThongTinHeThongRap();
      dispatch({
        type: SET_HE_THONG_RAP,
        payload: result.data.content,
      });
    };
  } catch (err) {
    console.log(err);
  }
};
export const setThongTinLichChieuAction = () => {
  try {
    return async (dispatch) => {
      const result = await QuanlyRapServices.LayThongTinLichChieuHeThongRap();
      console.log(result);
      dispatch({
        type: SET_THONG_TIN_LICH_CHIEU,
        payload: result.data.content,
      });
    };
  } catch (err) {
    console.log(err);
  }
};
