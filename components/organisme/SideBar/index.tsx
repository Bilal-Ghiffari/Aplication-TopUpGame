import Profile from "./Profile";
import SideFooter from "./SideFooter";
import MenuItems from "./MenuItems";

interface SideBarProps {
  activeMenu: "overview" | "transactions" | "settings";
}

export default function SideBar(props: SideBarProps) {
  const { activeMenu } = props;

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
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
          <MenuItems title="Messages" icon="ic-menu-messages" href="/message" />
          <MenuItems title="Card" icon="ic-menu-card" href="/card" />
          <MenuItems title="Rewards" icon="ic-menu-reward" href="rewards" />
          <MenuItems
            active={activeMenu === "settings"}
            title="Settings"
            icon="ic-menu-setting"
            href="/Member/edit-profile"
          />
          <MenuItems title="Log Out" icon="ic-menu-logout" href="/sign-in" />
        </div>
        <SideFooter />
      </div>
    </section>
  );
}
