import { store } from "../../index.js";
import { QuanlyPhimServices } from "../../services/QuanlyPhimServices/QuanlyPhimServices.js";
import { SET_BANNER_PHIM } from "../type/CarouselType.js";
import { set_Loading_End, set_Loading_Start } from "./LoadingAction.js";
export const GetCarouselAction = () => {
  store.dispatch(set_Loading_Start());
  return async (dispatch) => {
    try {
      const result = await QuanlyPhimServices.LayDanhSachPhimBanner();
      console.log(result);
      store.dispatch(set_Loading_End());
      dispatch({
        type: SET_BANNER_PHIM,
        payload: result.data.content,
      });
    } catch (err) {
      store.dispatch(set_Loading_End());
      console.log(err);
    }
  };
};
