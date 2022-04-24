import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import { JwtPayloadTypes } from "../../../services/data-types";

export default function Profile() {
  const API_IMAGE = process.env.NEXT_PUBLIC_IMG;
  const [user, setUser] = useState({
    avatar: "",
    nama: "",
    email: "",
  });
  useEffect(() => {
    const token = Cookies.get("tkn");

    if (token) {
      const jwtToken = atob(token);
      const payload: JwtPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload = payload.player;
      setUser(userFromPayload);
    }
  }, []);
  return (
    <div className="user text-center pb-50 pe-30">
      <img
        src={`${API_IMAGE}/${user.avatar}`}
        width={90}
        height={90}
        className="img-fluid mb-20 overflow-hidden"
        style={{ borderRadius: "100%" }}
      />
      <h2 className="fw-bold text-xl color-palette-2 m-0">{user.nama}</h2>
      {/* <p className="color-palette-2 m-0">{user.email}</p> */}
    </div>
  );
}
