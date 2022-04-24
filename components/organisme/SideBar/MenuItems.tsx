import Link from "next/link";
import cx from "classnames";
interface MenuItemsProps {
  title: string;
  icon:
    | "ic-desktop"
    | "ic-menu-card"
    | "ic-menu-logout"
    | "ic-menu-overview"
    | "ic-menu-reward"
    | "ic-menu-setting"
    | "ic-menu-transaction"
    | "ic-mobile";
  active?: boolean;
  href?: string;
  onClick?: () => void;
  status?: string;
}

export default function MenuItems(props: MenuItemsProps) {
  const { title, icon, active, href, onClick, status } = props;
  const classNames = cx({
    item: true,
    "mb-30": true,
    active,
  });

  const classStatus = cx({
    "float-start icon-status": true,
    pedding: status === "pending",
    success: status === "success",
    failed: status === "failed",
  });

  return (
    <div className={classNames} onClick={onClick}>
      <div className="me-3">
        <img src={`/icon/${icon}.svg`} width={25} height={25} alt="" />
        <div>
          <span className={classStatus}></span>
        </div>
      </div>
      <p className="item-title m-0">
        {onClick ? (
          <a className="text-lg text-decoration-none">{title}</a>
        ) : (
          <Link href={href!} replace>
            <a className="text-lg text-decoration-none">{title}</a>
          </Link>
        )}
      </p>
    </div>
  );
}
