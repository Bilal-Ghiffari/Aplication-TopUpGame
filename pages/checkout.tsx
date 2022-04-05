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

interface GetServerSideProps {
  req: {
    cookies: {
      tkn: string;
      checktopup: string;
      checkItem: string;
    };
  };
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { tkn, checktopup, checkItem } = req.cookies;

  if (!tkn) {
    return {
      redirect: {
        permanent: false,
        destination: "/sign-in",
      },
    };
  } else {
    if (!checktopup && !checkItem) {
      return {
        redirect: { destination: "/validationCheckout", permanent: false },
      };
    }
  }

  return {
    // mempassing user ke page melalui props
    props: {
      user: {},
    },
  };

  // kalau di server side kita ubah / format base 64 menjadi string token dengan memakai Buffer
  //ASCII adalah set karakter pertama (standar pengkodean)
  // const jwtToken = Buffer.from(tkn, "base64").toString("ascii")
}
