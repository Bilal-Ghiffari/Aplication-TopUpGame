import cx from "classnames";

interface MenuItemsProps {
  title: string;
  icon:
    | "ic-desktop"
    | "ic-menu-card"
    | "ic-menu-logout"
    | "ic-menu-messages"
    | "ic-menu-overview"
    | "ic-menu-reward"
    | "ic-menu-setting"
    | "ic-menu-transaction"
    | "ic-mobile";
  active?: boolean;
  href: string;
}

export default function MenuItems(props: MenuItemsProps) {
  const { title, icon, active, href } = props;
  const classNames = cx({
    item: true,
    "mb-30": true,
    active,
  });
  return (
    <div className={classNames}>
      <div className="me-3">
        <img src={`/icon/${icon}.svg`} width={25} height={25} alt="" />
      </div>
      <p className="item-title m-0">
        <a href={href} className="text-lg text-decoration-none">
          {title}
        </a>
      </p>
    </div>
  );
}
