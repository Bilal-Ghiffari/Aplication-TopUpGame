export default function SplashScreen() {
  return (
    <section className="color-palette-9">
      <div className="container mx-auto min-vh-100">
        <div className="d-flex flex-column align-items-center justify-content-center vh-100">
          <div className="w-100 align-items-center">
            <img
              src="/icon/logo.png"
              height={60}
              width={60}
              alt="Logo splash screen"
              className="mx-auto mb-30 d-flex justify-content-center"
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
            <p
              className="mt-20 px-4 fw-bold fs-3 color-palette-3 d-flex justify-content-center"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              PayGames
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
