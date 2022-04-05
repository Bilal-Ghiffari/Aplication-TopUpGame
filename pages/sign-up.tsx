import Link from "next/link";
import SinUpForm from "../components/organisme/SignUpForm";

export default function SignUp() {
  return (
    <section style={{ backgroundColor: "#030306" }}>
      <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
        <div className="container mx-auto">
          <form action="">
            <div className="pb-50">
              <Link href="/">
                <a className="navbar-brand">
                  <img src="/icon/logo.svg" width={60} height={60} alt="" />
                </a>
              </Link>
            </div>
            <SinUpForm />
          </form>
        </div>
      </section>
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      tkn: string;
    };
  };
}

export async function getServerSideProps({ req }: GetServerSideProps) {
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
