import Link from "next/link";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import { JwtPayloadTypes } from "../../../services/data-types";
import { useRouter } from "next/router";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    avatar: "",
  });
  const router = useRouter();

  useEffect(() => {
    // cara membaca/read cookies yaitu dengan memakai get
    const token = Cookies.get("tkn");
    // jika user sudah login/mempunyai token
    if (token) {
      // Metode atob()mendekode string yang telah dikodekan oleh btoa()metode.
      const jwtToken = atob(token);
      const payload: JwtPayloadTypes = jwt_decode(jwtToken);
      const userFromPayload = payload.player;
      const IMG = process.env.NEXT_PUBLIC_IMG;
      user.avatar = `${IMG}/${userFromPayload.avatar}`;
      setIsLogin(true);
      setUser(user);
    }
  }, []);

  // membuat Logout
  const Logout = () => {
    // remove cookies
    Cookies.remove("tkn");
    router.push("/");
    setIsLogin(false);
  };

  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"></div>
        <div>
          <a
            className="dropdown-toggle ms-lg-40"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={user.avatar}
              className="rounded-circle"
              width="40"
              height="40"
              alt=""
            />
          </a>

          <ul
            className="dropdown-menu border-0"
            aria-labelledby="dropdownMenuLink"
          >
            <li>
              <Link href="/Member">
                <a className="dropdown-item text-lg color-palette-2">
                  My Profile
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="dropdown-item text-lg color-palette-2">Wallet</a>
              </Link>
            </li>
            <li>
              <Link href="/Member/edit-profile">
                <a className="dropdown-item text-lg color-palette-2">
                  Account Settings
                </a>
              </Link>
            </li>
            <li onClick={Logout}>
              <a className="dropdown-item text-lg color-palette-2">Log Out</a>
            </li>
          </ul>
        </div>
      </li>
    );
  }
  return (
    <li className="nav-item navbar-light my-auto">
      <Link href="/sign-in">
        <a
          className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
          role="button"
        >
          Sign In
        </a>
      </Link>
    </li>
  );
}
