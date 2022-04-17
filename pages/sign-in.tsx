import Link from "next/link";
import Head from "next/head";
import SignInForm from "../components/organisme/SignInForm";

export default function SignIn() {
  return (
    <>
      <Head>
        <title>masuk | paygames</title>
        <meta
          name="description"
          content="menyediakan cara untuk membantu player juara dengan TopUp dikami dengan mudah dan cepat"
        />
        <meta property="og:title" content="paygames" />
        <meta
          property="og:description"
          content="menyediakan cara untuk membantu player juara dengan TopUp dikami dengan mudah dan cepat"
        />
        <link rel="icon" href="/icon/logo.png" />
      </Head>
      <section style={{ backgroundColor: "#030306" }}>
        <section className="sign-in mx-auto">
          <div className="row">
            <div className="col-xxl-5 col-lg-6 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
              <form action="">
                <div className="container mx-auto">
                  <div className="pb-50">
                    <Link href="/">
                      <a className="navbar-brand">
                        <img
                          src="/icon/logo.svg"
                          width={60}
                          height={60}
                          alt=""
                        />
                      </a>
                    </Link>
                  </div>
                  <SignInForm />
                </div>
              </form>
            </div>
            <div className="col-xxl-7 col-lg-6 bg-blue text-center pt-lg-145 pb-lg-145 d-lg-block d-none">
              <img
                src="images/Header-9.png"
                width="502"
                height="391.21"
                className="img-fluid pb-50"
                alt=""
              />
              <h2 className="text-4xl fw-bold text-white mb-30">
                Win the battle.
                <br />
                Be the Champion.
              </h2>
              <p className="text-white m-0">
                Kami menyediakan jutaan cara untuk
                <br /> membantu players menjadi
                <br />
                pemenang sejati
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

interface getCookies {
  req: {
    cookies: {
      tkn: string;
    };
  };
}

export async function getServerSideProps({ req }: getCookies) {
  const { tkn } = req.cookies;

  if (tkn) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
