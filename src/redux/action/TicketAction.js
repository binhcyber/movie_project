import { store } from "../../index.js";
import { QuanLyDatVe } from "../../services/QuanLyDatVe/QuanLyDatVe";
import { GET_LIST_SEAT } from "../type/TicketType";
import { set_Loading_Start, set_Loading_End } from "../action/LoadingAction";
import { message } from "antd";
import { history } from "../../App.js";
export const setTicketAction = (data) => {
  store.dispatch(set_Loading_Start());
  try {
    return async (dispatch) => {
      const result = await QuanLyDatVe.LayDanhSachPhongVe(data);
      console.log(result);
      store.dispatch(set_Loading_End());
      dispatch({
        type: GET_LIST_SEAT,
        payload: result.data.content,
      });
    };
  } catch (err) {
    store.dispatch(set_Loading_End());
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
    window.location.assign("/");
    message.success("Đặt vé thành công");
  }
};
