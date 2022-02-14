import callAPi from "../configs/api";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function getMemberOverview() {
  const url = `${ROOT_API}/${API_VERSION}/players/dashboard`;

  return callAPi({
    url,
    method: "GET",
    token: true,
  });
}

export async function getMemberTransactions(queryParams: string) {
  // logic untuk mengirim params
  let query = "";

  if (queryParams === "all") {
    query = "";
  } else {
    // selain query nya itu all berarti ada success failed pending
    query = `?status=${queryParams}`;
    console.log(query);
  }
  const url = `${ROOT_API}/${API_VERSION}/players/history${query}`;

  return callAPi({
    url,
    method: "GET",
    token: true,
  });
}

export async function getMemberTransactionDetails(id: string, token: string) {
  const url = `${ROOT_API}/${API_VERSION}/players/history/${id}/detail`;

  return callAPi({
    url,
    method: "GET",
    serverToken: token,
  });
}

export async function getMemberEditProfile(data: FormData) {
  const url = `${ROOT_API}/${API_VERSION}/players/profile`;

  return callAPi({
    url,
    method: "PUT",
    data,
    token: true,
  });
}
