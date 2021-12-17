import CheckoutConfirmation from "../components/organisme/Checkout/CheckoutConfrim";
import CheckoutDetails from "../components/organisme/Checkout/CheckoutDetails";
import CheckoutItem from "../components/organisme/Checkout/CheckoutItem";

export default function checkOut() {
  return (
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
      <div className="container-fluid">
        <div className="logo text-md-center text-start pb-50">
          <a className="" href="#">
            <img src="/icon/logo.svg" width={60} height={60} alt="" />
          </a>
        </div>
        <div className="title-text pt-md-50 pt-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
          <p className="text-lg color-palette-1 mb-0">
            Waktunya meningkatkan cara bermain
          </p>
        </div>
        <CheckoutItem />
        <hr />
        <CheckoutDetails />
        <CheckoutConfirmation />
      </div>
    </section>
  );
}
