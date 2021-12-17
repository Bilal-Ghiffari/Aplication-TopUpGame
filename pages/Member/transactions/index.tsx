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
