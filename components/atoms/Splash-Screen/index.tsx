export default function SplashScreen() {
  return (
    <section className="color-palette-9">
      <div className="cart container mx-auto">
        <div className="cart-thumbnail">
          <img
            src="images/image-splash-screen.png"
            className="images"
            alt="splash screen"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          />
          <div
            className="cart-title"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            Paygames
          </div>
        </div>
      </div>
    </section>
  );
}
