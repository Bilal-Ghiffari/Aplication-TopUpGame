import Link from "next/link";
import Cookies from "js-cookie";
import { GameItemTypes } from "../../../services/data-types";

interface nameBreadcrumb {
  nameBreadcrumbActive: GameItemTypes;
}

export function BreadCrumbDetailsItem({
  nameBreadcrumbActive,
}: nameBreadcrumb) {
  function handleRemoveItem() {
    localStorage.removeItem("data-item");
    Cookies.remove("checkItem");
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/" replace>
              <a
                className="text-decoration-none fs-5 color-palette-5"
                onClick={handleRemoveItem}
              >
                Home
              </a>
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/404" replace>
              <a className="text-decoration-none fs-5 color-palette-5">
                Details
              </a>
            </Link>
          </li>
          <li className="breadcrumb-item active fs-5" aria-current="page">
            {nameBreadcrumbActive.name}
          </li>
        </ol>
      </nav>
    </div>
  );
}
