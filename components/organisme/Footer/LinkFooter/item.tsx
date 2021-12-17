interface LinkProps {
  href: string;
  className: string;
  title: string;
}

export default function LinkFooter(props: LinkProps) {
  const { href = "/", className, title } = props;

  return (
    <li className="mb-6">
      <a href={href} className={className}>
        {title}
      </a>
    </li>
  );
}
