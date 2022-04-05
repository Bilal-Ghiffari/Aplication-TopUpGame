import React, { useState, useEffect } from "react";
import Link from "next/link";
import { setLogin } from "../../../services/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

// import jwt_decode from "jwt-decode";
//jwt-decode adalah perpustakaan browser kecil yang membantu decoding token JWT yang dikodekan Base64Url.

import Cookies from "js-cookie";
// js-cookie untuk menyimpan data di dalam cookies

interface SignInFormProps {
  _id: string;
}

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [payload, setPayload] = useState<SignInFormProps>();

  const router = useRouter();

  useEffect(() => {
    const dataDetailsLocal = localStorage.getItem("data-item");
    const parseDataDetails = JSON.parse(dataDetailsLocal!);
    setPayload(parseDataDetails);
  }, []);

  const onSubmit = async () => {
    const data = {
      email,
      password,
    };
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
        // disimpan didalam cookies selama 1 hari lebih dari 1 hari user harus login lagi
        Cookies.set("tkn", tokenBase64, { expires: 1 });

        if (payload) {
          router.replace(`/details/${payload._id}`);
        } else {
          router.replace("/");
        }
      }
    }
  };

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-8 mb-10">Sign In</h2>
      <p className="text-lg color-palette-3 m-0">
        Masuk untuk melakukan proses top up
      </p>
      <div className="pt-50">
        <label className="form-label text-lg fw-medium color-palette-5 mb-10">
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
        <label className="form-label text-lg fw-medium color-palette-5 mb-10">
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-pill text-lg text-white"
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
    </>
  );
}
