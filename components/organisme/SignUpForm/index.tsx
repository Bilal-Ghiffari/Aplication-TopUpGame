import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import cx from "classnames";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function SinUpForm() {
  const router = useRouter();
  const className = {
    label: cx("form-label text-lg fw-medium color-palette-5 mb-10"),
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");

  // state menghandle validation form
  const [hasErrorEmail, setHasErrorEmail] = useState("");
  const [hasErrorPassword, setHasErrorPassword] = useState("");

  // message validation form
  const validateEmail = "Harap sesuaikan format Email yang diminta";
  const validatePassword =
    "Password!!! Harus berisi setidaknya satu angka dan satu huruf besar dan kecil, dan setidaknya 8 karakter atau lebih";

  const onSubmit = () => {
    if (name === "") {
      toast.error("nama wajib diisi");
    }

    if (email === "") {
      toast.error("silahkan lengkapi email");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      // jika regex nya tidak sesuai dengan input email maka kita kasih error validate
      // kalau user tidak dikasi type email @gamil.com maka kita kasih error validate
      setHasErrorEmail(validateEmail);
    } else {
      setHasErrorEmail("");
    }

    if (password === "") {
      toast.error("silahkan lenkapi password");
    } else if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a!-zA-Z]{8,}$/.test(password)
    ) {
      setHasErrorPassword(validatePassword);
    } else {
      setHasErrorPassword("");
    }

    if (telephone === "") {
      toast.error("phone Number wajib diisi");
    }

    const useForm = {
      name,
      email,
      password,
      telephone,
    };

    //https://rubular.com = web rubular untuk membuat regex

    const patternPassword = !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a!-zA-Z]{8,}$/.test(
      password
    );

    const patternEmail = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (name !== "" || telephone !== "" || email !== "" || password !== "") {
      if (patternEmail) {
        toast.error(validateEmail);
      } else if (patternPassword) {
        toast.error(validatePassword);
      } else {
        localStorage.setItem("user-form", JSON.stringify(useForm));
        Cookies.set("userForm", JSON.stringify(useForm));
        router.replace("/sign-up-photo");
      }
    }
  };

  useEffect(() => {
    router.prefetch("/sign-up-photo");
  }, []);

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-8 mb-10">Sign Up</h2>
      <p className="text-lg color-palette-3 m-0">
        Daftar dan bergabung dengan kami
      </p>
      <div className="pt-50">
        <label htmlFor="name" className={className.label}>
          Full Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="name"
          name="name"
          aria-describedby="name"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="pt-30">
        <label htmlFor="email" className={className.label}>
          Email Address
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          id="email"
          name="email"
          aria-describedby="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {hasErrorEmail && <span style={{ color: "red" }}>{hasErrorEmail}</span>}
      </div>
      <div className="pt-30">
        <label htmlFor="password" className={className.label}>
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          id="password"
          name="password"
          aria-describedby="password"
          placeholder="Your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {hasErrorPassword && (
          <span style={{ color: "red" }}>{hasErrorPassword}</span>
        )}
      </div>
      <div className="pt-30">
        <label htmlFor="phone" className={className.label}>
          PhoneNumber
        </label>
        <input
          type="tel"
          className="form-control rounded-pill text-lg"
          id="phone"
          name="phone"
          pattern="[0-9]*"
          aria-describedby="phone"
          placeholder="Your PhoneNumber"
          value={telephone}
          onChange={(event) => setTelephone(event.target.value)}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          type="button"
          className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
          onClick={onSubmit}
        >
          Continue
        </button>
        <Link href="/sign-in" replace>
          <a className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill">
            Sign In
          </a>
        </Link>
      </div>
    </>
  );
}
