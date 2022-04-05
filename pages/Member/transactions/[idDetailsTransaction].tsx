import jwtDecode from "jwt-decode";
import TransactionsContentDetails from "../../../components/organisme/TransactionsContentDetails";
import {
  HistoryTransactionTypes,
  JwtPayloadTypes,
} from "../../../services/data-types";
import { getMemberTransactionDetails } from "../../../services/member";

interface TransActionsDetailsProps {
  transactionDetail: HistoryTransactionTypes;
}

export default function TransActionsDetail(props: TransActionsDetailsProps) {
  const { transactionDetail } = props;

  return (
    <section className="transactions-detail overflow-auto">
      <TransactionsContentDetails data={transactionDetail} />
    </section>
  );
}

interface GetCookies {
  req: {
    cookies: {
      tkn: string;
    };
  };

  params: {
    idDetailsTransaction: string;
  };
}

export async function getServerSideProps({ req, params }: GetCookies) {
  const { tkn } = req.cookies;
  const { idDetailsTransaction } = params;
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

  // memanggil api didalam Server

  const response = await getMemberTransactionDetails(
    idDetailsTransaction,
    jwtToken
  );
  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
