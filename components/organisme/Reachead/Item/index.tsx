interface ReacheadProps {
  ranting: string;
  desc: string;
  color: string;
}

export default function ItemReachead(props: ReacheadProps) {
  const { ranting, desc, color } = props;
  return (
    <div className="me-lg-35">
      <p
        className={[
          "text-4xl text-lg-start text-center fw-bold m-0 ",
          color,
        ].join("")}
      >
        {ranting}
      </p>
      <p className="text-lg text-lg-start text-center color-palette-3 m-0">
        {desc}
      </p>
    </div>
  );
}
