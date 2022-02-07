import React, { useState } from "react";
import Link from "next/link";
import { setLogin } from "../../../services/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

// import jwt_decode from "jwt-decode";
//jwt-decode adalah perpustakaan browser kecil yang membantu decoding token JWT yang dikodekan Base64Url.

import Cookies from "js-cookie";
// js-cookie untuk menyimpan data di dalam cookies

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const onSubmit = async () => {
    const data = {
      email,
      password,
    };
    console.log(data);
    if (!email) {
      toast.error("email wajib diisi");
    } else if (!password) {
      toast.error("password wajib diisi");
    } else {
      const response = await setLogin(data);
      if (response.error) {
        toast.error(response.message);
      } else {
        toast.success("login berhasil");
        const token = response.data.token;
        // jadi sebelum token disimpan didalam cookie token diubah menjadi code jelek/agle dan sifatnya bukan token lagi
        // btoa String yang disandikan menjadi base-64.
        const tokenBase64 = btoa(token);
        console.log(tokenBase64);
        // disimpan didalam cookies selama 1 hari lebih dari 1 hari user harus login lagi
        Cookies.set("tkn", tokenBase64, { expires: 1 });
        router.push("/");
      }
    }
  };

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
      <p className="text-lg color-palette-1 m-0">
        Masuk untuk melakukan proses top up
      </p>
      <div className="pt-50">
        <label className="form-label text-lg fw-medium color-palette-1 mb-10">
          Email Address
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="pt-30">
        <label className="form-label text-lg fw-medium color-palette-1 mb-10">
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          placeholder="Your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
          type="button"
          onClick={onSubmit}
        >
          Continue to Sign In
        </button>
        <Link href="/sign-up">
          <a className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill">
            Sign Up
          </a>
        </Link>
      </div>
      <ToastContainer />
    </>
  );
}
