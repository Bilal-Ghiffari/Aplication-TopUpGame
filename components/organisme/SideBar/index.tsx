import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Profile from "./Profile";
import SideFooter from "./SideFooter";
import MenuItems from "./MenuItems";

interface SideBarProps {
  activeMenu?: "overview" | "transactions" | "settings" | "Log Out";
}

export default function SideBar({ activeMenu }: SideBarProps) {
  const router = useRouter();

  const onLogout = () => {
    Cookies.remove("tkn");
    router.push("/sign-in");
  };

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <div className="pb-5"></div>
        <Profile />

        <div className="menus">
          <MenuItems
            title="Overview"
            active={activeMenu === "overview"}
            icon="ic-menu-overview"
            href="/Member"
          />
          <MenuItems
            active={activeMenu === "transactions"}
            title="Transactions"
            icon="ic-menu-transaction"
            href="/Member/transactions"
          />
          <MenuItems title="Card" icon="ic-menu-card" href="/card" />
          <MenuItems title="Rewards" icon="ic-menu-reward" href="/" />
          <MenuItems
            active={activeMenu === "settings"}
            title="Settings"
            icon="ic-menu-setting"
            href="/Member/edit-profile"
          />
          <MenuItems title="Log Out" icon="ic-menu-logout" onClick={onLogout} />
        </div>
        <SideFooter />
      </div>
    </section>
  );
}
