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
        // store.dispatch(set_Loading_End());
        console.log(result);
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
        //  store.dispatch(set_Loading_End());
        message.error("Tài khoản hoặc mật khẩu không đúng", 10);
      });
  };

  // try {
  //   return async (dispatch) => {
  //     const result = await QuanLyUserService.layThongTinNguoiDung(data);
  //     console.log(result);
  //     if (result.status === 200) {
  //       dispatch({
  //         type: DANG_NHAP,
  //         payload: result.data.content,
  //       });
  //     } else if (result.status === 404) {
  //       message.error("Tài khoản hoặc mật khẩu không đúng");
  //       return;
  //     }
  //     setTimeout(() => {
  //       history.push("/");
  //       message.success("Đăng Nhập Thành Công");
  //     });
  //   };
  // } catch (err) {
  //   message.error("Tài Khoản hoặc mật khẩu không đúng?");
  //   // console.log(err);
  // }
};
export const setUserSignUpAction = (data) => {
  // store.dispatch(set_Loading_Start());
  return (dispatch) => {
    QuanLyUserService.layThongTinDangKy(data)
      .then((result) => {
        // store.dispatch(set_Loading_End());
        if (result.status === 200) {
          dispatch({
            type: DANG_KY,
            payload: result.data.content,
          });
        }
        setTimeout(() => {
          history.push("/");
          message.success("Đăng Nhập Thành Công");
        });
      })
      .catch((err) => {
        // store.dispatch(set_Loading_End());
        message.error("Vui lòng đăng ký lại", 10);
      });
  };
  console.log(data);
  // try {
  //   return async (dispatch) => {
  //     const result = await QuanLyUserService.layThongTinDangKy(data);
  //     console.log(result);
  //     if (result.status === 200) {
  //       dispatch({
  //         type: DANG_KY,
  //         payload: result.data.content,
  //       });
  //     }
  //     setTimeout(() => {
  //       history.push("/login");
  //       message.success("Đăng Ký Thành Công");
  //     }, 2000);
  //   };
  // } catch (err) {
  //   setTimeout(() => {
  //     message.error("Vui lòng đăng ký lại");
  //   });
  // }
};
