import callAPi from "../configs/api";
import { LoginTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export function setSignUp(data: FormData) {
  const url = `${ROOT_API}/${API_VERSION}/auth/signup`;

  return callAPi({
    data,
    method: "POST",
    url,
  });
}

export function setLogin(data: LoginTypes) {
  const url = `${ROOT_API}/${API_VERSION}/auth/signin`;

  return callAPi({
    data,
    method: "POST",
    url,
  });
}
