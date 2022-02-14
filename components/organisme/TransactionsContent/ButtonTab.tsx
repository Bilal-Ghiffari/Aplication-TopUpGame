import cx from "classnames";

interface ButtonTabProps {
  title: string;
  active: boolean;
  onClickTab: () => void;
}

export default function ButtonTab(props: ButtonTabProps) {
  const { title, active, onClickTab } = props;
  const btnClass = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": active,
  });
  return (
    <button type="button" onClick={onClickTab} className={btnClass}>
      {title}
    </button>
  );
}
