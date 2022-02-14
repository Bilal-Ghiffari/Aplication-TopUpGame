import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

interface CallApiProps extends AxiosRequestConfig {
  // kalo tidak required kita kasih ?
  token?: boolean;
  serverToken?: string;
}

export default async function callAPi({
  url,
  method,
  data,
  token,
  serverToken,
}: CallApiProps) {
  let headers = {};
  if (serverToken) {
    // logic untuk memanggil token di server
    headers = {
      Authorization: `Bearer ${serverToken}`,
    };
  }
  if (token) {
    // ketika token nya dipakai atau bernilai true
    const tknCookies = Cookies.get("tkn");
    if (tknCookies) {
      const JwtToken = atob(tknCookies);
      // kita tambah bearer dan token didalam headers nya
      headers = {
        Authorization: `Bearer ${JwtToken}`,
      };
    }
  }

  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response);

  // error status lebih dari 300 dinyatakan error
  // dan dibawah 300 dinyatakan success
  if (response.status > 300) {
    // strukture error
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }

  const { length } = Object.keys(response.data);
  const res = {
    error: false,
    message: "success",
    data: length > 1 ? response.data : response.data.data,
  };

  return res;
}
