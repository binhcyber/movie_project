import { QuanlyPhimServices } from "../../services/QuanlyPhimServices/QuanlyPhimServices";
import { SET_DETAIL_FILM } from "../type/DetailFilmType";

export const setDetailFilmAction = () => {
  try {
    return async (dispatch) => {
      const result = await QuanlyPhimServices.layDanhSachPhim();
      dispatch({
        type: SET_DETAIL_FILM,
        payload: result.data.content,
      });
    };
  } catch (err) {
    console.log(err);
  }
};
