import { DOMAIN, TOKEN_CYBER, MA_NHOM } from "../../utils/setting/config";
import axios from "axios";

export const QuanlyRapServices = {
  LayThongTinHeThongRap: () => {
    return axios({
      url: `${DOMAIN}/api/QuanLyRap/LayThongTinHeThongRap`,
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN_CYBER,
      },
    });
  },
  LayThongTinLichChieuHeThongRap: () => {
    return axios({
      url: `${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${MA_NHOM}`,
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN_CYBER,
      },
    });
  },
  LayThongTinLichChieuPhim: (maPhim) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN_CYBER,
      },
    });
  },
};
