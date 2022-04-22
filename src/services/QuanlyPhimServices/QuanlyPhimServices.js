import axios from "axios";
import { DOMAIN, MA_NHOM, TOKEN_CYBER } from "../../utils/setting/config";
export const QuanlyPhimServices = {
  LayDanhSachPhimBanner: () => {
    return axios({
      url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`,
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN_CYBER,
      },
    });
  },
  layDanhSachPhim: () => {
    return axios({
      url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachPhim?maNhom=${MA_NHOM}`,
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN_CYBER,
      },
    });
  },
  LayThongTinPhim: (maPhim) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN_CYBER,
      },
    });
  },
};
