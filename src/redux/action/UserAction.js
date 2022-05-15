import { QuanLyUserService } from "../../services/QuanLyUserService/QuanLyUserService";
import { DANG_KY, DANG_NHAP } from "../type/UserType";
// import { useHistory } from "react-router-dom";
import { message, Button, Space } from "antd";
import { history } from "../../App";
import { store } from "../../index.js";
import { set_Loading_End, set_Loading_Start } from "./LoadingAction";
export const setUserLoginAction = (data) => {
  // store.dispatch(set_Loading_Start());
  return (dispatch) => {
    QuanLyUserService.layThongTinNguoiDung(data)
      .then((result) => {
        if (result.status === 200) {
          dispatch({
            type: DANG_NHAP,
            payload: result.data.content,
          });
        }
        setTimeout(() => {
          history.push("/");
          message.success("Đăng Nhập Thành Công");
        });
      })
      .catch((err) => {
        message.error("Tài khoản hoặc mật khẩu không đúng", 10);
      });
  };
};
export const setUserSignUpAction = (data) => {
  return (dispatch) => {
    QuanLyUserService.layThongTinDangKy(data)
      .then((result) => {
        if (result.status === 200) {
          dispatch({
            type: DANG_KY,
            payload: result.data.content,
          });
        }
        setTimeout(() => {
          history.push("/login");
          message.success("Đăng Ký Thành Công");
        });
      })
      .catch((err) => {
        message.error("Vui lòng đăng ký lại", 10);
      });
  };
};
