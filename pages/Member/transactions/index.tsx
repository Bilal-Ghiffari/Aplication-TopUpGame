import jwtDecode from "jwt-decode";
import SideBar from "../../../components/organisme/SideBar";
import TransactionsContent from "../../../components/organisme/TransactionsContent";
import { JwtPayloadTypes } from "../../../services/data-types";

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <SideBar activeMenu="transactions" />
      <TransactionsContent />
    </section>
  );
}

export async function getServerSideProps({ req }) {
  const { tkn } = req.cookies;

  if (!tkn) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(tkn, "base64").toString("ascii");
  const payload: JwtPayloadTypes = jwtDecode(jwtToken);
  const userFromPayload = payload.player;

  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;

  return {
    props: {
      user: userFromPayload,
    },
  };
}
