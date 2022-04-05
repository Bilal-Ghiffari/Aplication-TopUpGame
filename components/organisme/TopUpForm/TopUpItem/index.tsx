import Image from "next/image";
import { useEffect } from "react";

interface TopUpItemProps {
  type: "mobile" | "desktop";
  detail: {
    name: string;
    thumbnail: string;
    category: {
      name: string;
    };
  };
}

const IMG = process.env.NEXT_PUBLIC_IMG;

export default function TopUpItem({ type, detail }: TopUpItemProps) {
  useEffect(() => {
    localStorage.setItem("data-item", JSON.stringify(detail));
  }, []);

  if (type === "desktop") {
    return (
      <div className="pb-50 d-md-block d-none">
        <h2 className="text-4xl fw-bold color-palette-5 text-start mb-10 mt-10">
          {detail.name}
        </h2>
        <p className="text-lg color-palette-3 mb-0">
          Category: {detail.category.name}
        </p>
      </div>
    );
  }

  return (
    <div className="row align-items-center">
      <div className="col-md-12 col-4 images" data-aos={"zoom-in"}>
        <Image
          src={`${IMG}/${detail.thumbnail}`}
          width="280"
          height="380"
          className="img-fluid"
          alt=""
        />
      </div>

      <div className="col-md-12 col-8 d-md-none d-block">
        <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">
          {detail.name}
        </h2>
        <p className="text-sm color-palette-2 text-start mb-0">
          Category: {detail.category.name}
        </p>
      </div>
    </div>
  );
}
