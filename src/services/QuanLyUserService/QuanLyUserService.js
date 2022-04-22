import { DOMAIN, TOKEN_CYBER } from "../../utils/setting/config";
import axios from "axios";
export const QuanLyUserService = {
  layThongTinNguoiDung: (data) => {
    console.log(data);
    return axios({
      url: `${DOMAIN}/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: data,
      headers: {
        TokenCybersoft: TOKEN_CYBER,
      },
    });
  },
  layThongTinDangKy: (data) => {
    console.log(data);
    return axios({
      url: `${DOMAIN}/api/QuanLyNguoiDung/DangKy`,
      method: "POST",
      data: data,
      headers: {
        TokenCybersoft: TOKEN_CYBER,
      },
    });
  },
};
