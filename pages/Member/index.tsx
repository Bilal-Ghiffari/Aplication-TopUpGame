import OverviewContent from "../../components/organisme/OverviewContent";
import SideBar from "../../components/organisme/SideBar";

export default function Members() {
  return (
    <section className="overview overflow-auto">
      <SideBar />
      <OverviewContent />
    </section>
  );
}
