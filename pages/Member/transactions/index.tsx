import SideBar from "../../../components/organisme/SideBar";
import TransactionsContent from "../../../components/organisme/TransactionsContent";

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <SideBar activeMenu="transactions" />
      <TransactionsContent />
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
