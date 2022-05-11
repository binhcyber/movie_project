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
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWJjMTIzIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoiMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJRdWFuVHJpIiwiMiIsIkdQMDEiXSwibmJmIjoxNjUyMjQzMTM0LCJleHAiOjE2NTIyNDY3MzR9.Idl0VPG6WiZjgFHnA37lLA3tUjwF_E96mPFzRmlDxWY",
      },
    });
  },
};
