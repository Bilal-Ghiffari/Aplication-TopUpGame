import { useEffect } from "react";
import Image from "next/image";
import router from "next/router";

export default function Chekout404() {
  useEffect(() => {
    setTimeout(() => {
      router.push("/sign-in");
    }, 1000);
  }, []);
  return (
    <section className="not-found mx-auto pt-145 pb-md-212 pb-100">
      <div className="container-fluid">
        <div className="text-center">
          <Image
            src="/images/image-404.png"
            height={612}
            width={612}
            alt="Silahkan daftar terlebih dahulu"
          />
        </div>
        <div className="pt-70 pb-md-50 pb-150">
          <h2 className="text-4xl fw-bold text-center color-palette-1 mb-10">
            Oops! Not Found
          </h2>
          <p className="text-lg text-center color-palette-1 m-0">
            Anda belum melakukan TopUp{""}
            <br className="d-sm-block d-none" />
            Silahkan untuk melakukan memilih game yang ingin anda TopUp
          </p>
        </div>
      </div>
    </section>
  );
}
