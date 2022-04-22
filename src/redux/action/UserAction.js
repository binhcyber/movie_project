import { QuanLyUserService } from "../../services/QuanLyUserService/QuanLyUserService";
import { DANG_KY, DANG_NHAP } from "../type/UserType";
// import { useHistory } from "react-router-dom";
import { message, Button, Space } from "antd";
import { history } from "../../App";
export const setUserLoginAction = (data) => {
  return (dispatch) => {
    QuanLyUserService.layThongTinNguoiDung(data)
      .then((result) => {
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
          history.push("/");
          message.success("Đăng Nhập Thành Công");
        });
      })
      .catch((err) => {
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
