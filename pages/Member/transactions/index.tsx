import Head from "next/head";
import SideBar from "../../../components/organisme/SideBar";
import TransactionsContent from "../../../components/organisme/TransactionsContent";

export default function Transactions() {
  return (
    <>
      <Head>
        <title>transaction | paygames</title>
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
      <section className="transactions overflow-auto">
        <SideBar activeMenu="transactions" />
        <TransactionsContent />
      </section>
    </>
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

  if (!tkn) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
