import NumberFormat from "react-number-format";

interface RowProps {
  label: string;
  value: string | number;
  className?: string;
}

export default function Row(props: Partial<RowProps>) {
  const { label, value, className } = props;
  return (
    <p className="text-lg color-palette-1 mb-20">
      {label}
      <span className={`purchase-details ${className}`}>
        {/* logic ketika salah satu dari api type nya number kita kasih number format kalo tidak dia mengembalikan string */}
        {typeof value === "number" ? (
          <NumberFormat
            value={value}
            prefix="Rp. "
            decimalSeparator=","
            thousandSeparator="."
            displayType="text"
          />
        ) : (
          value
        )}
      </span>
    </p>
  );
}
