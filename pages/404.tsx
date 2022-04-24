import { useEffect } from "react";
import Image from "next/image";
import router from "next/router";

export default function Custom404() {
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 1000);
  }, []);
  return (
    <section className="not-found mx-auto pt-50 pb-md-212 pb-100">
      <div className="container-fluid">
        <div className="text-center">
          <Image
            src="/images/image-404.png"
            width={612}
            height={612}
            quality={100}
            alt="404 Not Found"
          />
        </div>
        <div className="pt-70 pb-md-50 pb-150">
          <h2 className="text-4xl fw-bold text-center color-palette-1 mb-10">
            Oops! Not Found
          </h2>
          <p className="text-lg text-center color-palette-1 m-0">
            Halaman yang anda kunjungi sudah{" "}
            <br className="d-sm-block d-none" />
            tidak tersedia pada sistem kami
          </p>
        </div>
      </div>
    </section>
  );
}
