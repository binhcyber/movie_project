import { QuanLyDatVe } from "../../services/QuanLyDatVe/QuanLyDatVe";
import { GET_LIST_SEAT } from "../type/TicketType";

export const setTicketAction = (data) => {
  try {
    return async (dispatch) => {
      const result = await QuanLyDatVe.LayDanhSachPhongVe(data);
      console.log(result);
      dispatch({
        type: GET_LIST_SEAT,
        payload: result.data.content,
      });
    };
  } catch (err) {
    console.log(err);
  }
};
export const getTicketAction = (data) => {
  try {
    return async (dispatch) => {
      console.log(data);
      const result = await QuanLyDatVe.DatVe(data);
      console.log(result);
    };
  } catch (err) {
    console.log(err);
  }
};
