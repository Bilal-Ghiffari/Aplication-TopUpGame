import axios, { AxiosRequestConfig } from "axios";

export default async function callAPi({
  url,
  method,
  data,
}: AxiosRequestConfig) {
  const response = await axios({
    url,
    method,
    data,
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

  const res = {
    error: false,
    message: "success",
    data: response.data.data,
  };

  return res;
}
