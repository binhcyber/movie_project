import { QuanlyPhimServices } from "../../services/QuanlyPhimServices/QuanlyPhimServices.js";
import { SET_BANNER_PHIM } from "../type/CarouselType.js";
export const GetCarouselAction = () => {
  return async (dispatch) => {
    try {
      const result = await QuanlyPhimServices.LayDanhSachPhimBanner();
      console.log(result);
      dispatch({
        type: SET_BANNER_PHIM,
        payload: result.data.content,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
