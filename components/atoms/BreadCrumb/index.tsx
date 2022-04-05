import Link from "next/link";
import { GameItemTypes } from "../../../services/data-types";

interface nameBreadcrumb {
  nameBreadcrumbActive: GameItemTypes;
}

export function BreadCrumbDetailsItem({
  nameBreadcrumbActive,
}: nameBreadcrumb) {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">
              <a className="text-decoration-none fs-5 color-palette-5">Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/404">
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
