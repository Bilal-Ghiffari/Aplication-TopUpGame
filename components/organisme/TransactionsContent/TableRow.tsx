import Link from "next/link";
import cx from "classnames";
import NumberFormat from "react-number-format";

interface TableRowPropa {
  img: string;
  title: string;
  category: string;
  item: string;
  price: number;
  status: string;
  id: string;
}

export default function TableRow(props: TableRowPropa) {
  const { img, title, category, item, price, status, id } = props;
  const classStatus = cx({
    "float-start icon-status": true,
    pending: status === "pending",
    success: status === "success",
    failed: status === "failed",
  });
  return (
    <tr data-category="pending" className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={img}
          width={80}
          height={60}
          alt="transactions-image"
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item}</p>
      </td>
      <td>
        <p className="fw-medium color-palette-1 m-0">
          <NumberFormat
            value={price}
            decimalSeparator=","
            thousandSeparator="."
            displayType="text"
          />
        </p>
      </td>
      <td>
        <div>
          <span className={classStatus}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
      <td>
        <Link href={`/Member/transactions/${id}`} replace>
          <a className="btn btn-status rounded-pill text-sm">Details</a>
        </Link>
      </td>
    </tr>
  );
}
