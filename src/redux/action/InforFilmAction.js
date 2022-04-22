import { QuanlyPhimServices } from "../../services/QuanlyPhimServices/QuanlyPhimServices";
import { QuanlyRapServices } from "../../services/QuanlyRapService/QuanlyRapService";
import { CALCULATE_FILM, INFOR_FILM } from "../type/InforFilmType";

export const setInforFilmAction = (maPhim) => {
  try {
    return async (dispatch) => {
      const result = await QuanlyPhimServices.LayThongTinPhim(maPhim);
      dispatch({
        type: INFOR_FILM,
        payload: result.data.content,
      });
    };
  } catch (err) {
    console.log(err);
  }
};
export const setcalculateFilmAction = (maPhim) => {
  try {
    return async (dispatch) => {
      const result = await QuanlyRapServices.LayThongTinLichChieuPhim(maPhim);
      dispatch({
        type: CALCULATE_FILM,
        payload: result.data.content,
      });
    };
  } catch (err) {
    console.log(err);
  }
};
