interface ReacheadProps {
  ranting: string;
  desc: string;
}

export default function ItemReachead(props: ReacheadProps) {
  const { ranting, desc } = props;
  return (
    <div className="me-lg-35">
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
        {ranting}
      </p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">
        {desc}
      </p>
    </div>
  );
}
