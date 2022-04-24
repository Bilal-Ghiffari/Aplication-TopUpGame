import { useEffect } from "react";
import Image from "next/image";
import router from "next/router";

export default function OfflineMode() {
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);
  return (
    <section className="not-found mx-auto pt-50 pb-md-212 pb-100">
      <div className="container-fluid">
        <div className="text-center">
          <Image
            src="/images/connection.png"
            width={230}
            height={212}
            quality={100}
            alt="404 Not Found"
          />
        </div>
        <div className="pt-70 pb-md-50 pb-150">
          <h2 className="text-4xl fw-bold text-center color-palette-1 mb-10">
            Yah, internetnya mati
          </h2>
          <p className="text-lg text-center color-palette-1 m-0">
            Cek koneksi WiFI atau kouta internetmu{" "}
            <br className="d-sm-block d-none" />
            dan coba lagi, ya
          </p>
        </div>
      </div>
    </section>
  );
}
