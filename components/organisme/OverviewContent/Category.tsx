import { ReactNode } from "react";
import Image from "next/image";
import NumberFormat from "react-number-format";

interface CategoryProps {
  children: ReactNode;
  icon: "ic-desktop" | "ic-mobile";
  nominal: number;
}

export default function Category(props: CategoryProps) {
  const { children, icon, nominal } = props;
  return (
    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
      <div className="categories-card">
        <div className="d-flex align-items-center mb-24">
          <Image
            src={`/icon/${icon}.svg`}
            width={60}
            height={60}
            quality={100}
            alt="icon-topUp-category"
          />
          <p className="color-palette-1 mb-0 ms-12">{children}</p>
        </div>
        <div>
          <p className="text-sm color-palette-2 mb-1">Total Spent</p>
          <p className="text-2xl color-palette-1 fw-medium m-0">
            <NumberFormat
              value={nominal}
              prefix="Rp. "
              decimalSeparator=","
              thousandSeparator="."
              displayType="text"
            />
          </p>
        </div>
      </div>
    </div>
  );
}
