import OverviewContent from "../../components/organisme/OverviewContent";
import SideBar from "../../components/organisme/SideBar";
import jwtDecode from "jwt-decode";
import { JwtPayloadTypes } from "../../services/data-types";

export default function Members() {
  return (
    <section className="overview overflow-auto">
      <SideBar />
      <OverviewContent />
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

// private route ketika belum login tidak masuk ke page member / dashboard
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
