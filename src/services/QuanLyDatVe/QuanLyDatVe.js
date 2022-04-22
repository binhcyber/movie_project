import { DOMAIN, TOKEN_CYBER, MA_NHOM } from "../../utils/setting/config";
import axios from "axios";
import { ACCESS_TOKEN } from "../../redux/type/UserType";
export const QuanLyDatVe = {
  LayDanhSachPhongVe: (data) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${data}`,
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN_CYBER,
      },
    });
  },
  DatVe: (data) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyDatVe/DatVe`,
      method: "POST",
      data: data,
      headers: {
        TokenCybersoft: TOKEN_CYBER,
        Authorization: localStorage.getItem(ACCESS_TOKEN),
      },
    });
  },
};
