import { store } from "../../index.js";
import { QuanlyPhimServices } from "../../services/QuanlyPhimServices/QuanlyPhimServices";
import { SET_DETAIL_FILM } from "../type/DetailFilmType";
import { set_Loading_End, set_Loading_Start } from "./LoadingAction";

export const setDetailFilmAction = () => {
  store.dispatch(set_Loading_Start());
  try {
    return async (dispatch) => {
      const result = await QuanlyPhimServices.layDanhSachPhim();
      store.dispatch(set_Loading_End());
      dispatch({
        type: SET_DETAIL_FILM,
        payload: result.data.content,
      });
    };
  } catch (err) {
    store.dispatch(set_Loading_End());
    console.log(err);
  }
};
