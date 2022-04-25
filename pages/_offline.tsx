import { useRouter } from "next/router";

export default function OfflineMode() {
  const router = useRouter();
  return (
    <section className="not-found mx-auto pt-50 pb-md-212 pb-100">
      <div className="container-fluid">
        <div className="text-center"></div>
        <div className="pt-70 pb-md-50 pb-100">
          <h2 className="text-2xl fw-bold text-center color-palette-1 mb-10">
            <svg
              className="color-palette-ranting-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              height={50}
              width={50}
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Yah, internetnya mati
          </h2>
          <p className="text-lg text-center color-palette-1 m-0">
            Cek koneksi WiFI atau kouta internetmu{" "}
            <br className="d-sm-block d-none" />
            dan coba lagi, ya
          </p>
        </div>
        <div className="button-group d-flex flex-column mx-auto">
          <button
            className="btn-readStory"
            onClick={() => router.reload()}
            role="button"
          >
            coba lagi
          </button>
        </div>
      </div>
    </section>
  );
}
